const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class GetManyBaseHandler extends BaseHandler {

	static get Operation() {
		return "getMany";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-many-count.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-many.ejs")
		];
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.getMany.onStart");
		
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.getMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.getMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.getMany.onFormatInput");
		// @TODO: format input parameters
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				where: parameters.request.query.where,
				join: parameters.request.query.join,
				limit: parameters.request.query.limit || 20,
				offset: parameters.request.query.offset,
				order: parameters.request.query.order,
				page: parameters.request.query.page || 1,
			}
		} else {
			parameters.input = {
				where: parameters.where,
				join: parameters.join,
				limit: parameters.limit || 20,
				offset: parameters.offset,
				order: parameters.order,
				page: parameters.page || 1,
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.getMany.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.getMany.onPrepareQuery");
		return super.onPrepareQuery(parameters);
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.getMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.getMany.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.getMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.getMany.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.getMany.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.getMany.onResult");
		parameters.output = {
			input: parameters.input,
			total: parameters.results[0][0].Total,
			items: parameters.result,
		};
		return parameters.output;
	}

}

module.exports = GetManyBaseHandler;