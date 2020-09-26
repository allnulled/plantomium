const colors = require("colors");
/**
 * 
 * ----
 * 
 * ### `/src/utils/debug.js`
 * 
 * @name `debug`
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
module.exports = function(...args) {
	if(process.env.DEBUG_TRACES === "true") {
		console.log(colors.blue("[DEBUG]"), ...args);
	}
}