const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class PutManyBaseHandler extends BaseHandler {

	static get Operation() {
		return "putMany";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/update-many.ejs"),
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.putMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.putMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.putMany.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				where: parameters.request.body.where,
				data: parameters.request.body.data,
			}
		} else {
			parameters.input = {
				where: parameters.where,
				data: parameters.data,
			}
		}
		if(typeof parameters.input.where === "string") {
			try {
				parameters.input.where = JSON.parse(parameters.input.where);
			} catch(error) {
				throw error;
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.putMany.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.putMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.putMany.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.putMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.putMany.onSynchronize");
		// @TODO: synchronize data
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.putMany.onResult");
		parameters.output = {
			operation: cms.utils.dataGetter(parameters, ["results", 0], null)
		};
	}

}

module.exports = PutManyBaseHandler;