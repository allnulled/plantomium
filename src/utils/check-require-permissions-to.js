module.exports = function(requireRules, authentication) {
	return require(process.env.PROJECT_ROOT + "/src/cms.js").utils.checkPermissionsTo(requireRules, authentication, true);
};