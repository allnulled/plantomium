module.exports = function(excludeRules, authentication) {
	return require(process.env.PROJECT_ROOT + "/src/cms.js").utils.checkPermissionsTo(excludeRules, authentication, false);
};