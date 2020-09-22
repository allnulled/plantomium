/**
 * 
 * ----
 * 
 * ### `/src/auth/connection.js`
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

cms.utils.trace("cms.process.connection");

module.exports = require("mysql").createConnection({
	user: process.env.REST_DB_USER,
	password: process.env.REST_DB_PASSWORD,
	database: process.env.REST_DB_NAME,
	host: process.env.REST_DB_HOST,
	port: process.env.REST_DB_PORT,
	multipleStatements: true,
});