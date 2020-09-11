module.exports = function(request) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	return cms.utils.dataGetter(request, ["headers", "user-agent"], undefined);
}