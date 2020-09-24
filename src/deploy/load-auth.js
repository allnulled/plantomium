module.exports = function(cms) {
	cms.auth = {};
	cms.auth.connection = require(process.env.PROJECT_ROOT + "/src/auth/connection.js");
	cms.auth.query = require(process.env.PROJECT_ROOT + "/src/auth/query.js");
	cms.auth.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/auth/queries", cms);
	cms.auth.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/actors", cms);
	cms.auth.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/middlewares", cms);
	cms.auth.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/controllers", cms);
}