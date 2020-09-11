const fs = require("fs");
const path = require("path");
const https = require("https");

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
	cms.utils.trace("cms.deploy.createServer");
	const certPath = path.resolve(process.env.PROJECT_ROOT, process.env.SECURE_SITE_CRT);
	const cert = fs.readFileSync(certPath).toString();
	const keyPath = path.resolve(process.env.PROJECT_ROOT, process.env.SECURE_SITE_KEY);
	const key  = fs.readFileSync(keyPath).toString();
	cms.server = https.createServer({key, cert}, cms.app);
	return cms.server;
}