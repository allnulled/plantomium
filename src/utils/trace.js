const colors = require("colors");

/**
 * 
 * ----
 * 
 * ### `/src/utils/trace.js`
 * 
 * @name `trace`
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
	if(require(process.env.PROJECT_ROOT + "/src/cms.js").schema.general.debugTraces) {
		console.log(colors.yellow("[TRACE]"), ...args);
	}
};