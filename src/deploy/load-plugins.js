module.exports = function(cms) {
	cms.plugins = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/plugins");
}