const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class DeleteManyBaseHandler extends BaseHandler {

	static get Operation() {
		return "deleteMany";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-many.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/delete-cascade.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/delete-many.ejs"),
			{template: path.resolve(process.env.PROJECT_ROOT + "/src/history/queries/insert-data.ejs"), history: true}
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				where: parameters.request.body.where
			}
		} else {
			parameters.input = {
				where: parameters.where
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onSynchronize");
		// @TODO: synchronize data
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.deleteMany.onResult");
		parameters.output = {
			items: cms.utils.dataGetter(parameters, ["results", 0], []),
			attachments: cms.utils.dataGetter(parameters, ["results", 1], []),
		}
	}

}

module.exports = DeleteManyBaseHandler;