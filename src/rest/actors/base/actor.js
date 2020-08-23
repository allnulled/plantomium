const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const schema = require(process.env.PROJECT_ROOT + "/src/config/schema.virtual.js");
const asynchandler = require("@allnulled/asynchandler");
const sqlString = require("sqlstring");
const ejs = require("ejs");

class BaseActor {

	static get DatabaseSchema() {
		return schema;
	}

	static get Table() {
		throw new Error("This method should be overriden.");
	}

	static get Schema() {
		return {
			constraints: this.DatabaseSchema.constraints[this.Table],
			columns: this.DatabaseSchema.columns[this.Table],
		};
	}

	static create(...args) {
		return new this(...args);
	}

	static createParameters(args = {}) {
		return cms.utils.createParameters({ actorClass: this, ...args });
	}

	constructor(options = {}) {
		this.connection = cms.rest.connection;
		this.handlerClasses = Object.assign({}, cms.rest.handlers);
		this.handlers = Object.keys(cms.rest.handlers).reduce((output, handlerKey) => {
			const handler = cms.rest.handlers[handlerKey];
			if(typeof handler.create !== "function") {
				throw new Error("Required <cms.rest.handlers>.<*> to have a (static) <create> method to instantiate an <actor>");
			}
			output[handlerKey] = handler.create({ actor: this });
			return output;
		}, {});
	}

	schema(parameters) {
		return this.handlers.schema.start(parameters);
	}

	getOne(parameters) {
		return this.handlers.getOne.start(parameters);
	}

	getMany(parameters) {
		return this.handlers.getMany.start(parameters);
	}

	postOne(parameters) {
		return this.handlers.postOne.start(parameters);
	}

	postMany(parameters) {
		return this.handlers.postMany.start(parameters);
	}

	putOne(parameters) {
		return this.handlers.putOne.start(parameters);
	}

	putMany(parameters) {
		return this.handlers.putMany.start(parameters);
	}

	deleteOne(parameters) {
		return this.handlers.deleteOne.start(parameters);
	}

	deleteMany(parameters) {
		return this.handlers.deleteMany.start(parameters);
	}

	fileGet(parameters) {
		return this.handlers.fileGet.start(parameters);
	}

	fileSet(parameters) {
		return this.handlers.fileSet.start(parameters);
	}

}

module.exports = BaseActor;