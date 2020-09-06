const fs = require("fs");
const mysql = require("mysql");
const cms = require(process.cwd() + "/src/cms.js");
const runtime = require(process.cwd() + "/src/start.js");;


/**
 * 
 * ----
 * 
 * ### `/src/control/reset-db.js`
 * 
 * @name `resetDb`
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
module.exports = (async function() {
	
	try {
		
		await runtime;

		const schemaSql = fs.readFileSync(process.cwd() + "/src/config/schema.sql").toString();

		const connection = mysql.createConnection({
			user: process.env.SCHEMA_DB_USER,
			password: process.env.SCHEMA_DB_PASSWORD,
			host: process.env.SCHEMA_DB_HOST,
			port: process.env.SCHEMA_DB_PORT,
			database: process.env.SCHEMA_DB_NAME,
			multipleStatements: true,
		});

		const data = await new Promise(function(ok, fail) {
			connection.query(schemaSql, function(error, data) {
				connection.end();
				if(error) {
					console.error("[⨯] Errors updating DB:", error);
					return fail(error);
				}
				console.log("[✔] DB successfully updated.");
				return ok(data);
			});
		});

		await cms.deploy.stopServer(cms);

		return cms;

	} catch(error) {
		throw error;
	}
	
})();
