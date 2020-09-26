module.exports = function(cms) {
	cms.markets = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/markets");
}