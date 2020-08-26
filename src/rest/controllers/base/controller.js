const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

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

	static get DEFAULT_POST_OPTIONS() {
		return [
			bodyParser.urlencoded({
				extended: true
			}),
			bodyParser.json({
				extended: true
			})
		];
	}

	static enablePost() {
		return this.DEFAULT_POST_OPTIONS;
	}

	static enablePostFile() {
		return multer({
			storage: multer.diskStorage({
				destination: (request, file, callback) => {
					const folder = path.resolve(process.env.PROJECT_ROOT, process.env.STORAGE_FOLDER);
					callback(null, folder);
				},
				filename: (request, file, callback) => {
					const filename = `${this.Table}.${request.params.column}.${request.params.id}${path.extname(file.originalname)}`;
					callback(null, filename);
				},
			})
		}).single("file");
	}

	constructor(parameters = {}) {
		this.currentSchema = {
			table: this.constructor.Actor.DatabaseSchema.constraints[this.constructor.Table],
			columns: this.constructor.Actor.DatabaseSchema.columns[this.constructor.Table],
		};
		this.actor = new this.constructor.Actor(parameters);
	}

	mountToRouter(app) {
		const parameters = {};
		this.slug = this.constructor.Actor.DatabaseSchema.general.slug;
		this.slugTable = path.join(this.slug, this.constructor.Table.replace(/_/g, "-"));
		this.slugTableId = path.join(this.slugTable, ":id");
		this.slugTableIdAndColumn = path.join(this.slugTable, ":id/:column");
		this.slugTableIdAndColumnWithExtension = path.join(this.slugTableIdAndColumn, ":extension");
		this.slugTableSchema = path.join(this.slugTable, "@");
		// Schema:
		app.get(this.slugTableSchema, this.schema(parameters));
		// Crud:
		app.get(this.slugTable, this.getMany(parameters));
		app.get(this.slugTableId, this.getOne(parameters));

		app.put(this.slugTable, this.constructor.enablePost(), this.putMany(parameters));
		app.put(this.slugTableId, this.constructor.enablePost(), this.putOne(parameters));

		app.post(this.slugTable, this.constructor.enablePost(), this.postMany(parameters));
		app.post(this.slugTableId, this.constructor.enablePost(), this.postOne(parameters));
		app.delete(this.slugTable, this.constructor.enablePost(), this.deleteMany(parameters));
		app.delete(this.slugTableId, this.constructor.enablePost(), this.deleteOne(parameters));
		// Files:
		app.get(this.slugTableIdAndColumnWithExtension, this.getFile(parameters));
		app.post(this.slugTableIdAndColumn, this.constructor.enablePostFile(), this.setFile(parameters));
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
				// Esta llamada necesita servir ficheros, NO JSON.
				// Por esta razón se añade esta condición.
				if(typeof data === "string") {
					return response.sendFile(data);
				}
				return this.onSuccess(data, request, response, next);
			} catch (error) {
				return this.onError(error, request, response, next);
			}
		}
	}

	setFile(parameters = {}) {
		return async (request, response, next) => {
			try {
				const data = await this.actor.setFile({
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