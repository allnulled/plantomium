module.exports = function(cms) {
	cms.hooks = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/hooks");
}