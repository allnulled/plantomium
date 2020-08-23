
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class FileGetBaseHandler extends BaseHandler {

	static get Operation() {
		return "fileGet";
	}

	static get QueryFile() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-one.ejs")
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.getFile.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.getFile.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.getFile.onFormatInput");
		// @TODO: format input parameters
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.getFile.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.getFile.onPrepareQuery");
		// @TODO: prepare query
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.getFile.onQuery");
		// @TODO: query
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.getFile.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.getFile.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.getFile.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.getFile.onBroadcast");
		// @TODO: broadcast changes
	}

	onResults(parameters) {
		cms.utils.trace("rest.handlers.getFile.onResults");
		parameters.output = "Fuck you";
	}

}

module.exports = FileGetBaseHandler;