const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class GetManyBaseHandler extends BaseHandler {

	static get Operation() {
		return "getMany";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-many.ejs"),
			"@" + path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-many-count.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-attachments.ejs"),
		];
	}

	onAuthorize(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onAuthorize");
		if(!parameters.request) {
			return true;
		}
		// @TODO: check authorization request
	}

	onValidate(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onValidate");
		// @TODO: validate request
	}

	onFormatInput(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onFormatInput");
		if(parameters.request && parameters.response && parameters.next) {
			parameters.input = {
				where: parameters.request.query.where,
				fields: parameters.request.query.fields,
				join: parameters.request.query.join,
				limit: parameters.request.query.limit || 20,
				offset: parameters.request.query.offset || 0,
				order: parameters.request.query.order,
				page: parameters.request.query.page || 1
			}
		} else {
			parameters.input = {
				where: parameters.where,
				fields: parameters.fields,
				join: parameters.join,
				limit: parameters.limit || 20,
				offset: parameters.offset || 0,
				order: parameters.order,
				page: parameters.page || 1,
			}
		}
	}

	onPreJobs(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onPreJobs");
		// @TODO: previous jobs
	}

	onQuery(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onQuery");
		return super.onQuery(parameters);
	}

	onFormatOutput(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onFormatOutput");
		
	}

	onPostJobs(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onPostJobs");
		// @TODO: post jobs
	}

	onSynchronize(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onSynchronize");
		// @TODO: synchronize data
	}

	onResult(parameters) {
		cms.utils.trace("cms.rest.handlers.getMany.onResult");
		parameters.output = {
			input: parameters.input,
			total: cms.utils.dataGetter(parameters, ["results", 1, 0, "Total"], null),
			items: cms.utils.dataGetter(parameters, ["results", 0], []),
			attachments: cms.utils.dataGetter(parameters, ["results", 2], null),
		};
		return parameters.output;
	}

}

module.exports = GetManyBaseHandler;