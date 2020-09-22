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
cms.utils.trace("cms.auth.connection");
module.exports = require("mysql").createConnection({
	user: process.env.AUTH_DB_USER || process.env.REST_DB_USER,
	password: process.env.AUTH_DB_PASSWORD || process.env.REST_DB_PASSWORD,
	database: process.env.AUTH_DB_NAME || process.env.REST_DB_NAME,
	host: process.env.AUTH_DB_HOST || process.env.REST_DB_HOST,
	port: process.env.AUTH_DB_PORT || process.env.REST_DB_PORT,
	multipleStatements: true,
});