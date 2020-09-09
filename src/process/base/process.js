const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

class BaseProcess {

	static create(...args) {
		return new this(...args);
	}

	static get DEFAULT_INHERITED_OPTIONS() {
		return {
			directory: undefined,
			name: undefined,
			table: undefined, // process_example
			transactionTable: undefined, // process_example_transaction
			transactionColumnRef: "id_process",
			actors: {},
			middlewares: {},
			controllers: {},
			templates: {},
			queries: {},
			routes: {},
		}
	}

	static get DEFAULT_OPTIONS() {
		return {};
	}

	constructor(options = {}) {
		Object.assign(this, this.constructor.DEFAULT_INHERITED_OPTIONS, this.constructor.DEFAULT_OPTIONS, options);
		if (typeof this.directory !== "string") {
			throw new Error("Required <directory> to be a string on <base/process> [ERR:905]");
		}
		if (typeof this.table !== "string") {
			throw new Error("Required <table> to be a string on <base/process> [ERR:906]");
		}
		if (typeof this.transactionTable !== "string") {
			throw new Error("Required <transactionTable> to be a string on <base/process> [ERR:907]");
		}
		if (!(this.table in cms.schema.constraints)) {
			throw new Error("Required <table> to be an existing table in schema on <base/process> [ERR:908]");
		}
		if (!(this.transactionTable in cms.schema.constraints)) {
			throw new Error("Required <transactionTable> to be an existing table in schema on <base/process> [ERR:909]");
		}
		if (!(this.transactionColumnRef in cms.schema.columns[this.transactionTable])) {
			throw new Error("Required <transactionColumnRef> to be an existing column of its table in schema on <base/process> [ERR:910]");
		}
		this.name = path.basename(this.directory);
		const queriesTmp = cms.utils.requireTemplatesDirectory(path.resolve(__dirname, "process/queries"), cms);
		const DEFAULT_QUERIES = this.fromTemplatesToQueries(queriesTmp);
		const localQueries = cms.utils.requireTemplatesDirectory(path.resolve(this.directory, "queries")) || {};
		const localTemplates = cms.utils.requireTemplatesDirectory(path.resolve(this.directory, "templates")) || {};
		const localActors = cms.utils.requireDirectory(path.resolve(this.directory, "actors")) || {};
		const localControllers = cms.utils.requireDirectory(path.resolve(this.directory, "controllers")) || {};
		const localMiddlewares = cms.utils.requireDirectory(path.resolve(this.directory, "middlewares")) || {};
		const localRoutes = cms.utils.requireDirectory(path.resolve(this.directory, "routes"));
		this.actors = Object.assign(this.actors, localActors, options.actors || {});
		this.controllers = Object.assign(this.controllers, localControllers, options.controllers || {});
		this.middlewares = Object.assign(this.middlewares, localMiddlewares, options.middlewares || {});
		this.queries = Object.assign(this.queries, DEFAULT_QUERIES, localQueries, options.queries || {});
		this.routes = Object.assign(this.routes, localRoutes, options.routes || {});
		this.templates = Object.assign(this.templates, localTemplates, options.templates || {});
	}

	fromTemplatesToQueries(queriesTmp) {
		return Object.keys(queriesTmp).reduce((output, queryKey) => {
			const query = queriesTmp[queryKey];
			output[queryKey] = async (...args) => {
				const querySource = await query(...args)
				return await this.onQuery(querySource);
			};
			return output;
		}, {});
	}

	onQuery(query) {
		return new Promise(function(ok, fail) {
			if (cms.schema.general.debugSqlProcess === true) {
				console.log("\n\n[SQL:PROCESS]____________________________________________\n", query);
			}
			cms.process.connection.query(query, function(error, data) {
				if (error) {
					return fail(error);
				}
				return ok(data);
			});
		});

	}

	onGetProcessMiddleware(routeData = {}) {
		return async (request, response, next) => {
			try {
				const { noProcessQuery = false } = routeData;
				if(!noProcessQuery) {
					const processId = request.params.id;
					const processData = await this.selectProcess(processId);
					request.fw.data.process = processId;
				}
				return next();
			} catch (error) {
				return cms.utils.erroneousJsonResponse(error, request, response, next);
			}
		};
	}

	mountProcessRoute(router, routeData = {}) {
		cms.utils.trace("cms.process.*.mountProcessRoute");
		const {
			routes = undefined,
				methods = undefined,
				middlewares = [],
				controller = (request, response, next) => next(),
		} = routeData;
		if (!Array.isArray(routes)) {
			throw new Error("Required <routes> to be an array on <mountProcessRoute> [ERR:912]");
		}
		if (!Array.isArray(methods)) {
			throw new Error("Required <methods> to be an array on <mountProcessRoute> [ERR:913]");
		}
		if (!Array.isArray(middlewares)) {
			throw new Error("Required <middlewares> to be an array on <mountProcessRoute> [ERR:914]");
		}
		if (typeof controller !== "function") {
			throw new Error("Required <controller> to be a function on <mountProcessRoute> [ERR:915]");
		}
		for (let index = 0; index < methods.length; index++) {
			const method = methods[index].toLowerCase();
			if (["use", "get", "post", "put", "delete"].indexOf(method.toLowerCase()) === -1) {
				throw new Error("Required <method> to be use, get, post, put or delete on <mountProcessRoute> [ERR:730]");
			}
			cms.utils.debug("Mounted:", routeData.methods, routeData.routes);
			for(let index=0; index < routes.length; index++) {
				const route = routes[index];
				router[method](route, middlewares, this.onGetProcessMiddleware(routeData), controller);
			}
		}
	}

	mountToRouter(router) {
		cms.utils.trace("cms.process.*.mountToRouter");
		const routeKeys = Object.keys(this.routes);
		for (let index = 0; index < routeKeys.length; index++) {
			const routeKey = routeKeys[index];
			const route = this.routes[routeKey];
			this.mountProcessRoute(router, route);
		}
	}

	async onQueryFileTemplate(fileTemplate, args, options = {}) {
		cms.utils.trace("cms.process.*.onQueryFileTemplate");
		try {
			const query = await ejs.renderFile(fileTemplate, args, options);
			const result = await this.onQuery(query);
			return result;
		} catch (error) {
			throw error;
		}
	}

	selectProcess(id) {
		cms.utils.trace("cms.process.*.selectProcess");
		return this.onQueryFileTemplate(__dirname + "/process/queries/select-process.ejs", cms.utils.createParameters({
			id,
			processInstance: this,
		}));
	}
	selectProcessTransactions(ids) {
		cms.utils.trace("cms.process.*.selectProcessTransactions");
		return this.onQueryFileTemplate(__dirname + "/process/queries/select-process-transactions.ejs", cms.utils.createParameters({
			ids,
			processInstance: this,
		}));
	}
	insertProcess(data) {
		cms.utils.trace("cms.process.*.insertProcess");
		return this.onQueryFileTemplate(__dirname + "/process/queries/insert-process.ejs", cms.utils.createParameters({
			data,
			processInstance: this,
		}));
	}
	insertProcessTransaction(data) {
		cms.utils.trace("cms.process.*.insertProcessTransaction");
		return this.onQueryFileTemplate(__dirname + "/process/queries/insert-process-transaction.ejs", cms.utils.createParameters({
			data,
			processInstance: this,
		}));
	}
	updateProcess(id, values) {
		cms.utils.trace("cms.process.*.updateProcess");
		return this.onQueryFileTemplate(__dirname + "/process/queries/update-process.ejs", cms.utils.createParameters({
			id,
			values,
			processInstance: this,
		}));
	}
	deleteProcess(id) {
		cms.utils.trace("cms.process.*.deleteProcess");
		return this.onQueryFileTemplate(__dirname + "/process/queries/delete-process.ejs", cms.utils.createParameters({
			id,
			processInstance: this,
		}));
	}
	deleteProcessTransactions(ids) {
		cms.utils.trace("cms.process.*.deleteProcessTransactions");
		return this.onQueryFileTemplate(__dirname + "/process/queries/delete-process-transactions.ejs", cms.utils.createParameters({
			ids,
			processInstance: this,
		}));
	}

}

module.exports = BaseProcess;