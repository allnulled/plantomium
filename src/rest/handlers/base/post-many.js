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

	onAuthorize(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onFormatInput");
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
		cms.utils.trace("cms.rest.handlers.postMany.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onSynchronize");
		// @TODO: synchronize data
	}

	onResult(parameters) {
		cms.utils.trace("cms.rest.handlers.postMany.onResult");
		parameters.output = {
			operation: cms.utils.dataGetter(parameters, ["results", 0], null)
		};
	}

}

module.exports = PostManyBaseHandler;