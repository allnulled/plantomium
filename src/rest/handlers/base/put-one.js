const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class PutOneBaseHandler extends BaseHandler {

	static get Operation() {
		return "putOne";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/update-one.ejs"),
		];
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.putOne.onStart");

	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.putOne.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.putOne.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.putOne.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				id: parameters.request.params.id,
				data: parameters.request.body
			}
		} else {
			parameters.input = {
				id: parameters.id,
				data: parameters.data
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.putOne.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.putOne.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.putOne.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.putOne.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.putOne.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.putOne.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.putOne.onResult");
		parameters.output = {
			operation: cms.utils.dataGetter(parameters, ["results", 0], null)
		};
	}

}

module.exports = PutOneBaseHandler;