module.exports = function(request) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getAgentFromRequest");
	return cms.utils.dataGetter(request, ["headers", "user-agent"], undefined);
}