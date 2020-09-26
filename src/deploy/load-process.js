module.exports = function(cms) {
	cms.process = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/process");
}