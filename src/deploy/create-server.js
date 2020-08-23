const http = require("http");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/create-server.js`
 * 
 * @name `createServer`
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
	cms.server = http.createServer(cms.app);
	return cms.server;
}