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
module.exports = require("mysql").createConnection({
	user: process.env.HISTORY_DB_USER,
	password: process.env.HISTORY_DB_PASSWORD,
	database: process.env.HISTORY_DB_NAME,
	host: process.env.HISTORY_DB_HOST,
	port: process.env.HISTORY_DB_PORT,
	multipleStatements: true,
});