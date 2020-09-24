module.exports = function(cms) {
	cms.json = {};
	cms.json.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/json/actors");
	cms.json.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/json/controllers");
	////////////////////////
}