const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class PostManyBaseHandler extends BaseHandler {

	static get Operation() {
		return "postMany";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/insert-many.ejs")
		];
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.postMany.onStart");

	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.postMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.postMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.postMany.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				data: parameters.request.body.data
			}
		} else {
			parameters.input = {
				data: parameters.data
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.postMany.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.postMany.onPrepareQuery");
		return super.onPrepareQuery(parameters);
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.postMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.postMany.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.postMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.postMany.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.postMany.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.postMany.onResult");
		parameters.output = parameters.result;
	}

}

module.exports = PostManyBaseHandler;