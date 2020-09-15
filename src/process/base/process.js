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
		cms.utils.trace("cms.process.*.constructor");
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
			dd(this.table, Object.keys(cms.schema.constraints));
			throw new Error("Required <table> to be an existing table in schema on <base/process>.\nNote: this error indicates an unsynchronization between code and database structure. To reset the migrations, try the command:\n    ~$ cms reset database && cms run migrations'\n [ERR:908]");
		}
		if (!(this.transactionTable in cms.schema.constraints)) {
			throw new Error("Required <transactionTable> to be an existing table in schema on <base/process> [ERR:909]");
		}
		if (!(this.transactionColumnRef in cms.schema.columns[this.transactionTable])) {
			throw new Error("Required <transactionColumnRef> to be an existing column of its table in schema on <base/process> [ERR:910]");
		}
		this.name = path.basename(this.directory);
		const defaultQueries = cms.utils.requireTemplatesDirectory(path.resolve(__dirname, "process/queries"), cms);
		const localQueries = cms.utils.requireTemplatesDirectory(path.resolve(this.directory, "queries")) || {};
		const localTemplates = cms.utils.requireTemplatesDirectory(path.resolve(this.directory, "templates")) || {};
		const localActors = cms.utils.requireDirectory(path.resolve(this.directory, "actors")) || {};
		const localControllers = cms.utils.requireDirectory(path.resolve(this.directory, "controllers")) || {};
		const localMiddlewares = cms.utils.requireDirectory(path.resolve(this.directory, "middlewares")) || {};
		const localRoutes = cms.utils.requireDirectory(path.resolve(this.directory, "routes"));
		this.actors = Object.assign(this.actors, localActors, options.actors || {});
		this.controllers = Object.assign(this.controllers, localControllers, options.controllers || {});
		this.middlewares = Object.assign(this.middlewares, localMiddlewares, options.middlewares || {});
		this.queries = Object.assign(this.queries, defaultQueries, localQueries, options.queries || {});
		this.routes = Object.assign(this.routes, localRoutes, options.routes || {});
		this.templates = Object.assign(this.templates, localTemplates, options.templates || {});
		this.onConstructed(options);
	}

	onConstructed(options = {}) {
		cms.utils.trace("cms.process.*.onConstructed");
		// @empty...
	}

	onQuery(query) {
		cms.utils.trace("cms.process.*.onQuery");
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
		cms.utils.trace("cms.process.*.onGetProcessMiddleware");
		return async (request, response, next) => {
			cms.utils.trace("cms.process.*.onGetProcessMiddleware.callback");
			try {
				const hasId = routeData.routes.join("").indexOf("/:id") !== -1;
				if (hasId) {
					const processId = parseInt(request.params.id);
					const processData = await this.selectProcess(processId);
					if ((!Array.isArray(processData)) || (processData.length === 0)) {
						throw new Error("Process was not found [ERR:7880]");
					}
					const processTransactionsData = await this.selectProcessTransactions(processId);
					if ((!Array.isArray(processTransactionsData)) || (processTransactionsData.length === 0)) {
						throw new Error("Process transactions were not found [ERR:7881]");
					}
					const processDataFormatted = cms.utils.toObjectSql(processData, this.table, "id");
					// @TODO: format joins of process...
					const processTransactionsDataFormatted = cms.utils.toObjectSql(processTransactionsData, this.transactionTable, "id");
					// @TODO: format joins of transaction...
					request.fw.process = {
						id: processId,
						process: processDataFormatted[0],
						transactions: processTransactionsDataFormatted,
					};
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
			for (let index = 0; index < routes.length; index++) {
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

	async selectProcess(id) {
		try {
			cms.utils.trace("cms.process.*.selectProcess");
			const params = cms.utils.createParameters({
				id,
				processInstance: this,
			});
			const querySource = await this.queries.selectProcess(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async selectProcessTransactions(idProcess) {
		try {
			cms.utils.trace("cms.process.*.selectProcessTransactions");
			const params = cms.utils.createParameters({
				id: idProcess,
				processInstance: this,
			});
			const querySource = await this.queries.selectProcessTransactions(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async insertProcess(data) {
		try {
			cms.utils.trace("cms.process.*.insertProcess");
			const params = cms.utils.createParameters({
				data,
				processInstance: this,
			});
			const querySource = await this.queries.insertProcess(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async insertProcessTransaction(data) {
		try {
			cms.utils.trace("cms.process.*.insertProcessTransaction");
			const params = cms.utils.createParameters({
				data,
				processInstance: this,
			});
			const querySource = await this.queries.insertProcessTransaction(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async updateProcess(id, values) {
		try {
			cms.utils.trace("cms.process.*.updateProcess");
			const params = cms.utils.createParameters({
				id,
				values,
				processInstance: this,
			});
			const querySource = await this.queries.updateProcess(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async deleteProcess(id) {
		try {
			cms.utils.trace("cms.process.*.deleteProcess");
			const params = cms.utils.createParameters({
				id,
				processInstance: this,
			});
			const querySource = await this.queries.deleteProcess(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

	async deleteProcessTransactions(ids) {
		try {
			cms.utils.trace("cms.process.*.deleteProcessTransactions");
			const params = cms.utils.createParameters({
				ids,
				processInstance: this,
			});
			const querySource = await this.queries.deleteProcessTransactions(params);
			const queryResult = await this.onQuery(querySource);
			return queryResult;
		} catch (error) {
			throw error;
		}
	}

}

module.exports = BaseProcess;