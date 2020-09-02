const path = require("path");
const BaseHandler = require(__dirname + "/../handler.js");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class GetOneBaseHandler extends BaseHandler {

	static get Operation() {
		return "getOne";
	}

	static get QueryFiles() {
		return [
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-one.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-attachments.ejs"),
			path.resolve(process.env.PROJECT_ROOT + "/src/rest/queries/select-branches.ejs"),
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
		parameters.output = {};
		const table = this.actor.constructor.Table;
		const treeData = cms.utils.dataGetter(cms, ["schema", "constraints", table, "rest", "tree"], null);
		const item = cms.utils.dataGetter(parameters, ["results", "0", "0"], null);
		const attachments = cms.utils.dataGetter(parameters, ["results", "1"], null);
		parameters.output.item = item;
		if(treeData) {
			const { pathColumn = "path" } = treeData;
			const tableColumnOrigin = table + "." + pathColumn;
			const itemPath = item[tableColumnOrigin];
			const childrenBrute = cms.utils.dataGetter(parameters, ["results", "2"], undefined);
			const children = Array.isArray(childrenBrute) ? childrenBrute.filter(child => {
				const isNotSame = child[tableColumnOrigin] !== item[tableColumnOrigin];
				const isImmediateChild = child[tableColumnOrigin].replace(item[tableColumnOrigin], "").replace(/^\/|\/$/g, "").split("/").length === 1;
				return isNotSame && isImmediateChild;
			}) : [];
			parameters.output.children = children;
		}
		parameters.output.attachments = attachments;
		return parameters.output;
	}

}

module.exports = GetOneBaseHandler;