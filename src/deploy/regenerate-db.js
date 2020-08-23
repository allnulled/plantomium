const path = require("path");
const importFresh = require("import-fresh");
const mysqlSchema = require("mysql-schema");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/regenerate-db.js`
 * 
 * @name `regenerateDb`
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
	const outputPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_OUTPUT);
	return mysqlSchema.getSchema({
		user: process.env.SCHEMA_DB_USER,
		password: process.env.SCHEMA_DB_PASSWORD,
		host: process.env.SCHEMA_DB_HOST,
		port: process.env.SCHEMA_DB_PORT,
		database: process.env.SCHEMA_DB_NAME,
		configurations: process.env.SCHEMA_CONFIGURATIONS ? path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_CONFIGURATIONS) : false,
		extensions: path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_EXTENSIONS),
		asJson: process.env.SCHEMA_AS_JSON === "true",
		output: outputPath,
	}).then(function(data) {
		cms.originalSchema = importFresh(outputPath);
		return data;
	});
}