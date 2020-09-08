
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class SetFileBaseHandler extends BaseHandler {

	static get Operation() {
		return "setFile";
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
		if(parameters.request) {
			parameters.table = this.actor.constructor.Table;
			parameters.id = parameters.request.params.id;
			parameters.column = parameters.request.params.column;
			parameters.file = parameters.request.file ? parameters.request.file : {};
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.setFile.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.setFile.onQuery");
		
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

	onResult(parameters) {
		cms.utils.trace("rest.handlers.setFile.onResult");
		parameters.output = parameters.id + ":" + parameters.column;
	}

}

module.exports = SetFileBaseHandler;