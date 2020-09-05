const fs = require("fs");
const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class GetFileBaseHandler extends BaseHandler {

	static get Operation() {
		return "getFile";
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
		if(parameters.request) {
			parameters.table = this.actor.constructor.Table;
			parameters.id = parameters.request.params.id;
			parameters.column = parameters.request.params.column;
			parameters.extension = parameters.request.params.extension;
			parameters.file = parameters.request.file ? parameters.request.file : {};
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.getFile.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.getFile.onQuery");
		const filename = `${parameters.table}.${parameters.column}.${parameters.id}.${parameters.extension}`;
		const filepath = path.resolve(process.env.PROJECT_ROOT, process.env.STORAGE_FOLDER, filename);
		return new Promise(function(ok, fail) {
			fs.exists(filepath, existsFile => {
				if(!existsFile) {
					return fail(new Error(`File <${filepath}> was not found`));
				}
				parameters.filepath = filepath;
				return ok();
			});
		});
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

	onResult(parameters) {
		cms.utils.trace("rest.handlers.getFile.onResult");
		parameters.output = parameters.filepath;
		return parameters.output;
	}

}

module.exports = GetFileBaseHandler;