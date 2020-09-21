const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const ejs = require("ejs");
const asynchandler = require("@allnulled/asynchandler");

class BaseHandler {

	static create(...args) {
		return new this(...args);
	}

	static get Operation() {
		throw new Error("Static property <Operation> must override its getter");
	}

	static get QueryFiles() {
		throw new Error("Static property <QueryFiles> must override its getter");
	}

	static get QueryFilesSettings() {
		return {
			resultQuery: -1
		}
	}

	constructor(options = {}) {
		Object.assign(this, options);
		this.operation = this.constructor.Operation;
	}

	getHandler() {
		cms.utils.trace("rest.handler.getHandler");
		return this.start.bind(this);
	}

	getLifecycle() {
		cms.utils.trace("rest.handler.getLifecycle");
		return [
			"onStart",
			"onRegisterEvent",
			"onAuthorize",
			"onValidate",
			"onFormatInput",
			"onPreJobs",
			"onQuery",
			"onFormatOutput",
			"onPostJobs",
			"onSynchronize",
			"onBroadcast",
			"onResult",
		]
	}

	async start(parameters = {}) {
		cms.utils.trace("rest.handler.start");
		try {
			const cycles = this.getLifecycle();
			let out = undefined;
			for (let index = 0; index < cycles.length; index++) {
				const cycle = cycles[index];
				out = await this[cycle](parameters);
				if (parameters.exit) {
					return parameters.exit;
				}
				if (parameters.exitSilently) {
					return;
				}
			}
			return out || parameters.output;
		} catch (error) {
			throw error;
		}
	}

	onStart(parameters) {
		cms.utils.trace("rest.handler.onStart");
		parameters.queries = [];
		parameters.results = [];
	}

	onRegisterEvent(parameters) {
		cms.utils.trace("rest.handler.onRegisterEvent");
		return this.createQueryFilePromise(
			{template: process.env.PROJECT_ROOT + "/src/history/queries/insert-event-by-rest.ejs", history: true},
			parameters,
			undefined,
			undefined,
			undefined,
		);
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handler.onAuthorize");
		throw new Error("Method <onAuthorize> must be overriden");
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handler.onValidate");
		throw new Error("Method <onValidate> must be overriden");
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handler.onFormatInput");
		throw new Error("Method <onFormatInput> must be overriden");
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handler.onPreJobs");
		throw new Error("Method <onPreJobs> must be overriden");
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handler.onQuery");
		try {
			if (this.constructor.QueryFiles.length === 0) {
				return;
			}
			const sortedFiles = [];
			for (let index = 0; index < this.constructor.QueryFiles.length; index++) {
				const queryFileParam = this.constructor.QueryFiles[index];
				const queryFile = this.normalizeQueryFile(queryFileParam);
				if (!queryFile.template.startsWith("@")) {
					sortedFiles.push([]);
				}
				sortedFiles[sortedFiles.length - 1].push(queryFile);
			}
			let indexBlock = 0,
				indexFiles = 0,
				indexGeneral = 0;
			return new Promise((ok, fail) => {
				const next = () => {
					if (!(indexBlock in sortedFiles)) {
						return ok(parameters.results);
					}
					const currentBlock = sortedFiles[indexBlock];
					if (!(indexFiles in currentBlock)) {
						indexFiles = 0;
						indexBlock++;
						return next();
					}
					const currentFile = currentBlock[indexFiles];
					indexFiles++;
					if (currentFile.template.endsWith(".ejs")) {
						this.createQueryFilePromise(
							currentFile,
							parameters,
							indexBlock,
							indexFiles,
							indexGeneral++,
						).then(next).catch(fail);
					} else if (currentFile.template.endsWith(".js")) {
						const injection = require(currentFile.template);
						if (typeof injection !== "function") {
							throw new Error("Required <currentFile.template> to be a string pointing to a js file that returns a function [ERR:034]");
						}
						return injection({
							cms,
							handler: this,
							currentFile,
							parameters,
							indexBlock,
							indexFiles,
							indexGeneral: indexGeneral++,
						}, next, fail);
					} else {
						throw new Error("Required <{handler}.constructor.QueryFiles> to be a string ending with '.ejs' or '.js' [ERR:033]");
					}
				};
				return next();
			});
		} catch (error) {
			cms.utils.debugError("{handler}.onRunQueries", error);
			throw error;
		}
	}

	normalizeQueryFile(queryFileParam) {
		const queryFileData = {};
		if (typeof queryFileParam === "string") {
			queryFileData.template = queryFileParam;
		} else if (typeof queryFileParam === "object") {
			Object.assign(queryFileData, queryFileParam);
		} else {
			throw new Error("Required <queryFileParam> to be a string or an object [ERR:030]");
		}
		if (typeof queryFileData.template !== "string") {
			throw new Error("Required <queryFileData.template> to be a string [ERR:031]");
		}
		return queryFileData;
	}

	async createQueryFilePromise(queryFileData, parameters, indexBlock = undefined, indexQuery = undefined, indexGeneral = undefined) {
		try {
			if(["string", "object"].indexOf(typeof queryFileData) === -1) {
				throw new Error("Required <queryFileData> to be a string or object on createQueryFilePromise [ERR:040]");
			}
			const queryFileDataFormatted = this.normalizeQueryFile(queryFileData);
			const templateTmp = queryFileDataFormatted.template;
			const template = templateTmp.startsWith("@") ? templateTmp.substr(1) : templateTmp;
			const templateParameters = cms.utils.createParameters({
				...parameters,
				indexBlock,
				indexQuery,
				queryData: queryFileDataFormatted,
			});
			const querySource = await this.onRenderFile(template, templateParameters);
			parameters.queries.push(querySource);
			if (querySource === "") {
				if (typeof indexGeneral !== "undefined") {
					parameters.results[indexGeneral] = null;
				}
				return null;
			}
			const queryResult = await this.onExecuteQuery(querySource, queryFileDataFormatted);
			if (typeof indexGeneral !== "undefined") {
				parameters.results[indexGeneral] = queryResult;
			}
			return queryResult;
		} catch (error) {
			cms.utils.debugError("{handler}.createQueryFilePromise", error);
			throw error;
		}
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handler.onFormatOutput");
		parameters.result = cms.utils.dataGetter(parameters, ["results"], []);
		parameters.result = parameters.result[0] || null;
		throw new Error("Method <onFormatOutput> must be overriden");
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handler.onPostJobs");
		throw new Error("Method <onPostJobs> must be overriden");
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handler.onSynchronize");
		throw new Error("Method <onSynchronize> must be overriden");
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handler.onBroadcast");
		const dehydratedRequest = cms.utils.dehydrateRequest(parameters.request);
		cms.socket.server.of("broadcast").emit("rest_event", dehydratedRequest);
	}

	onResult(parameters) {
		cms.utils.trace("rest.handler.onResult");
		throw new Error("Method <onResult> must be overriden");
	}

	onRenderFile(file, parameters) {
		cms.utils.trace("rest.handler.onRenderFile");
		return cms.utils.renderFile(file, {
			cms,
			parameters,
			handler: this,
			actorClass: this.actor.constructor
		});
	}

	onExecuteQuery(query, options = {}) {
		cms.utils.trace("rest.handler.onExecuteQuery");
		return new Promise((ok, fail) => {
			if(options.history === true) {
				cms.utils.debugHistoryQuery(query);
			} else if (cms.schema.general.debugSql) {
				cms.utils.debugRestQuery(query);
			}
			this.actor.connection.query(query, (error, data) => {
				if (error) {
					return fail(error);
				}
				return ok(data);
			});
		});
	}

}

module.exports = BaseHandler;