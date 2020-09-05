const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class PostOneBaseHandler extends BaseHandler {

	static get Operation() {
		return "postOne";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/insert-one.ejs")
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.postOne.onAuthorize")
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.postOne.onValidate")
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.postOne.onFormatInput")
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				data: parameters.request.body
			}
		} else {
			parameters.input = {
				data: parameters.data
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.postOne.onPreJobs")
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.postOne.onQuery")
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.postOne.onFormatOutput")
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.postOne.onPostJobs")
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.postOne.onSynchronize")
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.postOne.onBroadcast")
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.postOne.onResult")
		parameters.output = {
			operation: cms.utils.dataGetter(parameters, ["results", 0], null),
		};
	}

}

module.exports = PostOneBaseHandler;