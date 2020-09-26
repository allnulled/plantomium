const fs = require("fs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const mysql = require("mysql");
const config = require(process.env.PROJECT_ROOT + "/src/db/config.js");
const migrationsFile = config[process.env.NODE_ENV].migrationStoragePath;
const seedersFile = config[process.env.NODE_ENV].seederStoragePath;
fs.writeFileSync(migrationsFile, "[]", "utf8");
fs.writeFileSync(seedersFile, "[]", "utf8");
module.exports = new Promise(function(ok, fail) {
	const connection = mysql.createConnection({
		user: process.env.SCHEMA_DB_USER,
		password: process.env.SCHEMA_DB_PASSWORD,
		database: process.env.SCHEMA_DB_NAME,
		host: process.env.SCHEMA_DB_HOST,
		port: process.env.SCHEMA_DB_PORT,
		multipleStatements: true,
	});
	connection.query("DROP DATABASE " + process.env.REST_DB_NAME + ";", function(error) {
		if(error) return fail(error);
		console.log(" [✓] Database deleted successfuly.")
		connection.query("CREATE DATABASE " + process.env.REST_DB_NAME + ";", function(error) {
			if(error) return fail(error);
			console.log(" [✓] Database created successfuly.");
			require(process.env.PROJECT_ROOT + "/src/command/cms/run/migrations/index.js");
			connection.end(ok);
		});
	});
});