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
			"onAuthorize",
			"onValidate",
			"onFormatInput",
			"onPreJobs",
			"onPrepareQuery",
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
				if(parameters.exitSilently) {
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
		throw new Error("Method <onStart> must be overriden");
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

	async onPrepareQuery(parameters) {
		cms.utils.trace("rest.handler.onPrepareQuery");
		try {
			parameters.queries = [];
			if(this.constructor.QueryFiles) {
				for (let index = 0; index < this.constructor.QueryFiles.length; index++) {
					const queryFile = this.constructor.QueryFiles[index];
					const query = await this.renderFile(queryFile, parameters);
					parameters.queries[index] = query;
				}
			}
		} catch (error) {
			throw error;
		}
	}

	async onQuery(parameters) {
		cms.utils.trace("rest.handler.onQuery");
		try {
			parameters.results = await Promise.all(parameters.queries.map(q => this.onExecuteQuery(q)));
			parameters.result = parameters.results[parameters.results.length > 0 ? parameters.results.length - 1 : null];
		} catch (error) {
			cms.utils.debugError("{handler}.onRunQueries", error);
			throw error;
		}
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handler.onFormatOutput");
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
		throw new Error("Method <onBroadcast> must be overriden");
	}

	onResult(parameters) {
		cms.utils.trace("rest.handler.onResult");
		throw new Error("Method <onResult> must be overriden");
	}

	renderFile(file, parameters) {
		cms.utils.trace("rest.handler.renderFile");
		return cms.utils.renderFile(file, {
			cms,
			parameters,
			handler: this,
			actorClass: this.actor.constructor
		});
	}

	async onPrepareQueries(parameters) {
		cms.utils.trace("rest.handler.onPrepareQueries");
	}

	async onRunQueries(parameters) {
		cms.utils.trace("rest.handler.onRunQueries");
	}

	onExecuteQuery(query) {
		cms.utils.trace("rest.handler.onExecuteQuery");
		return new Promise((ok, fail) => {
			if(cms.schema.general.debugSql) {
				console.log("\n\n[SQL:REST]_______________________________________________\n", query);

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