const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const ENABLE_JSON = [
	bodyParser.urlencoded({
		extended: true
	}),
	bodyParser.json({
		extended: true
	})
];
const upload = multer({
	dest: path.resolve(process.env.PROJECT_ROOT, STORAGE_FOLDER)
});
const getFileFields = function() {

};

class BaseController {

	static get Table() {
		throw new Error("This method should be overriden.");
	}

	static get Actor() {
		throw new Error("This method should be overriden.");
	}

	static get Middleware() {
		throw new Error("This method should be overriden.");
	}

	static create(...args) {
		return new this(...args);
	}

	static get DEFAULT_OPTIONS() {
		return {}
	}

	constructor(parameters = {}) {
		this.currentSchema = {
			table: this.constructor.Actor.DatabaseSchema.constraints[this.constructor.Table],
			columns: this.constructor.Actor.DatabaseSchema.columns[this.constructor.Table],
		};
		this.actor = new this.constructor.Actor(parameters);
	}

	upload.single('avatar')


	mountToRouter(app) {
		const parameters = {};
		this.slug = this.constructor.Actor.DatabaseSchema.general.slug;
		this.slugTable = path.join(this.slug, this.constructor.Table.replace(/_/g, "-"));
		this.slugTableId = path.join(this.slugTable, ":id");
		this.slugTableFileId = path.join(this.slugTable, ":column/:id");
		this.slugTableSchema = path.join(this.slugTable, "@");
		// Schema:
		app.get(this.slugTableSchema, this.schema(parameters));
		// Crud:
		app.get(this.slugTable, this.getMany(parameters));
		app.get(this.slugTableId, this.getOne(parameters));

		app.put(this.slugTable, ENABLE_JSON, this.putMany(parameters));
		app.put(this.slugTableId, ENABLE_JSON, this.putOne(parameters));

		app.post(this.slugTable, ENABLE_JSON, this.postMany(parameters));
		app.post(this.slugTableId, ENABLE_JSON, this.postOne(parameters));
		app.delete(this.slugTable, ENABLE_JSON, this.deleteMany(parameters));
		app.delete(this.slugTableId, ENABLE_JSON, this.deleteOne(parameters));
		// Files:
		app.get(this.slugTableFileId, this.getFile(parameters));
		app.post(this.slugTableFileId, upload.fields([{
			name: 'file',
			maxCount: 1
		}]), this.postFile(parameters));
	}

	schema(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.schema({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	getMany(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.getMany({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	getOne(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.getOne({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	postMany(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.postMany({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	postOne(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.postOne({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	putMany(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.putMany({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	putOne(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.putOne({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	deleteMany(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.deleteMany({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	deleteOne(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.deleteOne({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	getFile(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.getFile({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	postFile(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.postFile({
					request,
					response,
					next,
					parameters,
					controller: this
				});
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	onSuccess(data, request, response, next) {
		return cms.utils.successfulJsonResponse(data, request, response, next);
	}

	onError(error, request, response, next) {
		return cms.utils.erroneousJsonResponse(error, request, response, next);
	}

}

module.exports = BaseController