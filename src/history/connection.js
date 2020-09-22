/**
 * 
 * ----
 * 
 * ### `/src/history/connection.js`
 * 
 * @name `connection`
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
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.history.queries.insertData");

module.exports = require("mysql").createConnection({
	user: process.env.HISTORY_DB_USER,
	password: process.env.HISTORY_DB_PASSWORD,
	database: process.env.HISTORY_DB_NAME,
	host: process.env.HISTORY_DB_HOST,
	port: process.env.HISTORY_DB_PORT,
	multipleStatements: true,
});