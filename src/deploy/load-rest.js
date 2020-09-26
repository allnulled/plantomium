module.exports = function(cms) {
	cms.rest = {};
	const schemaPath = require("path").resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_OUTPUT);
	cms.rest.originalSchema = require(schemaPath);
	cms.rest.connection = require(process.env.PROJECT_ROOT + "/src/rest/connection.js");
	cms.rest.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/rest/queries", cms);
	cms.rest.handlers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/handlers", cms, ["handler.js"]);
	cms.rest.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/actors", cms);
	cms.rest.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/middlewares", cms);
	cms.rest.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/controllers", cms);
}