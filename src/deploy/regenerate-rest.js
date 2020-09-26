const fs = require("fs");
const path = require("path");
const importFresh = require("import-fresh");
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
	cms.hooks.trigger("project.on-regenerate-rest", { });
	const outputVirtualPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_VIRTUAL_OUTPUT);
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
		cms.deploy.loadHigherApi(cms);
		cms.hooks.trigger("project.on-regenerated-rest", { output });
		cms.utils.trace("cms.deploy.regenerateRest: OK.");
		return output;
	});
}