const fs = require("fs");
const path = require("path");
const importFresh = require("import-fresh");
const mysqlSchema = require("mysql-schema");
const mysqlSchemaGenerator = require("mysql-schema-generator");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/regenerate-rest.js`
 * 
 * @name `regenerateRest`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(cms) {
	cms.utils.trace("cms.deploy.regenerateRest");
	const outputPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_OUTPUT);
	const outputVirtualPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_VIRTUAL_OUTPUT);
	// @TODO: 1. generate virtual schema:
	const virtualSchema = cms.utils.generateVirtualSchema(cms);
	cms.schema = virtualSchema;
	const virtualSchemaJs = mysqlSchema.stringifyFn(virtualSchema);
	fs.writeFileSync(outputVirtualPath, "module.exports = " + virtualSchemaJs, "utf8");
	// @TODO: 2. generate whole project from virtual schema:
	return mysqlSchemaGenerator.generateProject({
		schema: {
			generation: false
		},
		generator: {
			schema: [outputVirtualPath],
			directories: [__dirname + "/generated"],
			output: process.env.PROJECT_ROOT,
		}
	}).then(output => {
		////////////////////////
		cms.rest = {};
		cms.rest.originalSchema = require(outputPath);
		cms.rest.connection = require(process.env.PROJECT_ROOT + "/src/rest/connection.js");
		cms.rest.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/rest/queries", cms);
		cms.rest.handlers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/handlers", cms, ["handler.js"]);
		cms.rest.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/actors", cms);
		cms.rest.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/middlewares", cms);
		cms.rest.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/rest/controllers", cms);
		////////////////////////
		cms.email = {};
		cms.email.agents = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/email/agents");
		cms.email.templates = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/email/templates");
		////////////////////////
		cms.store = require(process.env.PROJECT_ROOT + "/src/store/index.js");
		////////////////////////
		cms.json = {};
		cms.json.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/json/actors");
		cms.json.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/json/controllers");
		////////////////////////
		cms.router = require(process.env.PROJECT_ROOT + "/src/router/index.js")(cms);
		////////////////////////
		cms.auth = {};
		cms.auth.connection = require(process.env.PROJECT_ROOT + "/src/auth/connection.js");
		cms.auth.query = require(process.env.PROJECT_ROOT + "/src/auth/query.js");
		cms.auth.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/auth/queries", cms);
		cms.auth.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/actors", cms);
		cms.auth.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/middlewares", cms);
		cms.auth.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/auth/controllers", cms);
		////////////////////////
		cms.history = {};
		cms.history.connection = require(process.env.PROJECT_ROOT + "/src/history/connection.js");
		cms.history.actors = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/actors");
		cms.history.middlewares = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/middlewares");
		cms.history.controllers = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/history/controllers");
		cms.history.queries = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/history/queries");
		////////////////////////
		cms.process = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/process");
		////////////////////////
		cms.utils.trace("cms.deploy.regenerateRest: OK.");
		return output;
	});
}