const fs = require("fs");
const asynchandler = require("@allnulled/asynchandler");
const mysql = require("mysql");

module.exports = async function(args) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const argv = require("yargs-parser")(args);
	const user = JSON.stringify(process.env.SCHEMA_DB_USER);
	const host = JSON.stringify(process.env.SCHEMA_DB_HOST);
	const port = JSON.stringify(process.env.SCHEMA_DB_PORT);
	const password = process.env.SCHEMA_DB_PASSWORD;
	const database = JSON.stringify(process.env.SCHEMA_DB_NAME);
	const outputPath = argv.file;
	const noData = argv.data === false;
	const originalCommand = `mysqldump ${noData ? "--no-data" : ""} --user ${user} --host ${host} --port ${port} --password=${password} ${database} > ${outputPath}`;
	const finalCommand = originalCommand;
	cms.utils.debug("[CMD] " + finalCommand);
	cms.utils.execSync(finalCommand);
}