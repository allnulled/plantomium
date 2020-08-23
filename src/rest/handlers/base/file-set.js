
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class FileSetBaseHandler extends BaseHandler {

	static get Operation() {
		return "fileSet";
	}

	static get QueryFile() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-one.ejs")
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.setFile.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.setFile.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.setFile.onFormatInput");
		// @TODO: format input parameters
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.setFile.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.setFile.onPrepareQuery");
		return super.onPrepareQuery(parameters);
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.setFile.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.setFile.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.setFile.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.setFile.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.setFile.onBroadcast");
		// @TODO: broadcast changes
	}

	onResults(parameters) {
		cms.utils.trace("rest.handlers.setFile.onResults");
		parameters.output = "Fuck you";
	}

}

module.exports = FileSetBaseHandler;