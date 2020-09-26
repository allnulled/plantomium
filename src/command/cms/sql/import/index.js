const fs = require("fs");
const asynchandler = require("@allnulled/asynchandler");
const mysql = require("mysql");
const Table = require("cli-table3");
const printTable = function(result) {
	let table = new Table();
	if(!Array.isArray(result)) {
		result = [].concat(result);
	}
	if(result.length === 0) {
		return console.log("No results found");
	}
	const headers = Object.keys(result[0]);
	table = table.concat(result.map(item => Object.values(item)));
	table.options.head = headers;
	table.options.colWidths = [headers[0] === "id" ? 5 : 15].concat(",10".repeat(headers.length-1).substr(1).split(",").filter(i => typeof i !== "string").map(i => parseInt(i)));
	console.log(table.toString());
}

module.exports = async function(args) {
	let connection = undefined;
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const argv = require("yargs-parser")(args);
		if(typeof argv.file !== "string") {
			throw new Error("Required <file> to be a string on <cms sql import> [ERR:4852]");
		}
		connection = mysql.createConnection({
			user: process.env.SCHEMA_DB_USER,
			password: process.env.SCHEMA_DB_PASSWORD,
			database: process.env.SCHEMA_DB_NAME,
			host: process.env.SCHEMA_DB_HOST,
			port: process.env.SCHEMA_DB_PORT,
			multipleStatements: true,
		});
		const fileContents = fs.readFileSync(argv.file).toString();
		cms.utils.trace("[SQL] " + fileContents);
		const originalResult = await new Promise((ok, fail) => connection.query(fileContents, asynchandler(ok, fail)));
		let result = originalResult;
		printTable(result);
		connection.end();
	} catch(error) {
		if(connection && (connection.state !== "disconnected")) {
			connection.end();
		}
		console.error(error);
	}
}