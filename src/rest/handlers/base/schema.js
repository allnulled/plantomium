const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class SchemaBaseHandler extends BaseHandler {

	static get Operation() {
		return "schema";
	}

	static get QueryFile() {
		return undefined;
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.schema.onStart");

	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.schema.onAuthorize");
		if(!parameters.request) {
			return true;
		}
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.schema.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.schema.onFormatInput");
		// @TODO: format input parameters
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.schema.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.schema.onPrepareQuery");
		// @TODO: prepare query
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.schema.onQuery");
		parameters.result = this.actor.constructor.Schema;
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.schema.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.schema.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.schema.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.schema.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.schema.onResult");
		return parameters.output = parameters.result;
	}

}

module.exports = SchemaBaseHandler;