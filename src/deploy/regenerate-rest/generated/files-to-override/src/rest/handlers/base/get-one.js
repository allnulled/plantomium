const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class GetOneBaseHandler extends BaseHandler {

	static get Operation() {
		return "getOne";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-one.ejs")
		];
	}

	onStart(parameters) {
		cms.utils.trace("rest.handlers.getOne.onStart");
		
	}

	onAuthorize(parameters) {
		cms.utils.trace("rest.handlers.getOne.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("rest.handlers.getOne.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("rest.handlers.getOne.onFormatInput");
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				id: parameters.request.params.id,
			}
		} else {
			parameters.input = {
				id: parameters.id
			};
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("rest.handlers.getOne.onPreJobs");
		// @TODO: previous jobs
	}

	onPrepareQuery(parameters) {
		cms.utils.trace("rest.handlers.getOne.onPrepareQuery");
		return super.onPrepareQuery(parameters);
	}

	onQuery(parameters) {
		cms.utils.trace("rest.handlers.getOne.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("rest.handlers.getOne.onFormatOutput");
		// @TODO: format output
	}

	onPostJobs(parameters) {
		cms.utils.trace("rest.handlers.getOne.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("rest.handlers.getOne.onSynchronize");
		// @TODO: synchronize data
	}

	onBroadcast(parameters) {
		cms.utils.trace("rest.handlers.getOne.onBroadcast");
		// @TODO: broadcast changes
	}

	onResult(parameters) {
		cms.utils.trace("rest.handlers.getOne.onResult");
		parameters.output = parameters.result || null;
		const joinedTables = cms.utils.dataGetter(cms, ["schema", "constraints", this.actor.constructor.Table, "rest", "join"], []);
		if(Object.keys(joinedTables).length === 0) {
			parameters.output = parameters.result[0] || null;
		}
		return parameters.output;
	}

}

module.exports = GetOneBaseHandler;