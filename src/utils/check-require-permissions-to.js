module.exports = function(requireRules, authentication) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.checkRequirePermissionsTo");
	return require(process.env.PROJECT_ROOT + "/src/cms.js").utils.checkPermissionsTo(requireRules, authentication, true);
};