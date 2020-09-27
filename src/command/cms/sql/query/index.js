const asynchandler = require("@allnulled/asynchandler");
const mysql = require("mysql");
const Table = require("cli-table3");


module.exports = async function(args) {
	let connection = undefined;
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		let hasStarted = false;
		const arg = args.map(item => {
			if(hasStarted) {
				return item;
			}
			if(item.startsWith("--")) {
				hasStarted = true;
				if(item === "--") {
					return undefined;
				}
			}
			return hasStarted ? item : undefined;
		}).filter(item => !((typeof item === "undefined") || (item === ""))).join(" ");
		connection = mysql.createConnection({
			user: process.env.SCHEMA_DB_USER,
			password: process.env.SCHEMA_DB_PASSWORD,
			database: process.env.SCHEMA_DB_NAME,
			host: process.env.SCHEMA_DB_HOST,
			port: process.env.SCHEMA_DB_PORT,
			multipleStatements: true,
		});
		cms.utils.trace("[SQL] " + arg);
		const originalResult = await new Promise((ok, fail) => connection.query(arg, asynchandler(ok, fail)));
		let result = originalResult;
		cms.utils.printSqlData(result, true);
		connection.end();
	} catch(error) {
		if(connection && (connection.state !== "disconnected")) {
			connection.end();
		}
		console.error(error);
	}
}