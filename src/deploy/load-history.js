module.exports = function(cms) {
	cms.history = {};
	cms.history.connection = require(process.env.PROJECT_ROOT + "/src/history/connection.js");
	cms.history.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/actors");
	cms.history.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/middlewares");
	cms.history.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/controllers");
	cms.history.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/history/queries");
}