const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const JSONStoreFactory = require(process.env.PROJECT_ROOT + "/src/json/actors/json-store-factory.js");

class JSONStoreController {

	static create(...args) {
		return new this(...args);
	}

	static get DEFAULT_OPTIONS() {
		return {
			middlewaresToGet: [],
			middlewaresToSet: [],
			middlewaresToDelete: [],
		}
	}

	constructor(options = {}) {
		Object.assign(this, this.constructor.DEFAULT_OPTIONS, options);
		if(typeof this.path !== "string") {
			throw new Error("Required <path> to be a string on JSONStoreController.constructor [ERR:042]");
		}
		if(typeof this.store !== "string") {
			throw new Error("Required <store> to be a string on JSONStoreController.constructor [ERR:043]");
		}
		console.log(this.store);
		this.jsonStore = JSONStoreFactory(this.store, this.settings, this.extensions);
	}
	
	mountToRouter(app) {
		app.get(this.path, this.middlewaresToGet, this.onGet.bind(this));
		app.post(this.path, cms.rest.middlewares.postify, this.middlewaresToSet, this.onSet.bind(this));
		app.delete(this.path, cms.rest.middlewares.postify, this.middlewaresToDelete, this.onDelete.bind(this));
	}

	async onGet(request, response, next) {
		try {
			const selectString = request.query.select || "[]";
			const select = JSON.parse(selectString);
			const selection = await this.jsonStore.get(select);
			cms.utils.successfulJsonResponse(selection, request, response, next);
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}

	async onSet(request, response, next) {
		try {
			const selectString = request.body.select || null;
			const valueString = request.body.value || null;
			const select = JSON.parse(selectString);
			if(!Array.isArray(select)) {
				throw new Error("Required <select> body parameter to be an array (stringified) on jsonStoreController.onSet [ERR:044]");
			}
			const value = JSON.parse(valueString);
			const selection = await this.jsonStore.set(select, value);
			cms.utils.successfulJsonResponse(selection, request, response, next);
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}

	async onDelete(request, response, next) {
		try {
			const selectString = request.query.select || request.query.select || null;
			const select = JSON.parse(selectString);
			if(!Array.isArray(select)) {
				throw new Error("Required <select> body parameter to be an array (stringified) on jsonStoreController.onDelete [ERR:046]");
			}
			const selection = await this.jsonStore.delete(select);
			cms.utils.successfulJsonResponse(selection, request, response, next);
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}

}

module.exports = JSONStoreController;