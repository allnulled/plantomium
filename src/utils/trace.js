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
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	if (cms.schema && cms.schema.general && (cms.schema.general.debugTraces === true)) {
		console.log(colors.yellow("[TRACE]"), ...args);
	}
};