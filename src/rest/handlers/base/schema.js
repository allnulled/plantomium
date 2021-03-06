const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class SchemaBaseHandler extends BaseHandler {

	static get Operation() {
		return "schema";
	}

	onAuthorize(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onAuthorize");
		if(!parameters.request) {
			return true;
		}
	}

	onValidate(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onFormatInput");
		// @TODO: format input parameters
	}

	onPreJobs(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onQuery");
		parameters.result = this.actor.constructor.Schema;
	}

	onFormatOutput(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onSynchronize");
		// @TODO: synchronize data
	}

	onResult(parameters) {
		cms.utils.trace("cms.rest.handlers.schema.onResult");
		return parameters.output = parameters.result;
	}

}

module.exports = SchemaBaseHandler;