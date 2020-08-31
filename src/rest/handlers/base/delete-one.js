const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class DeleteOneBaseHandler extends BaseHandler {

	static get Operation() {
		return "deleteOne";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-one.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/delete-one.ejs")
		];
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onStart");

	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				id: parameters.request.params.id
			}
		} else {
			parameters.input = {
				id: parameters.id
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.deleteOne.onResult");
		parameters.output = parameters.results[0] && parameters.results[0][0] ? parameters.results[0][0] : null;
	}

}

module.exports = DeleteOneBaseHandler;