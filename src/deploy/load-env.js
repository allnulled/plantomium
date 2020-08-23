const path = require("path");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/load-env.js`
 * 
 * @name `loadEnv`
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
	process.env.PROJECT_ROOT = path.resolve(__dirname, "..", "..");
	dotenv.config({path: __dirname + "/../config/.env"});
	const out = dotenv.config({path: __dirname + "/../config/.env." + process.env.NODE_ENV || "test"});
	dotenvExpand(out);
	return process.env;
}