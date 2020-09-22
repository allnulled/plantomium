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
	if(process.env.DEBUG_TRACES) {
		console.log("[DEBUG]", ...args);
	}
}