/**
 * 
 * ----
 * 
 * ### `/src/deploy/load-api.js`
 * 
 * @name `loadApi`
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
	cms.utils.trace("[UTILS...]");
	cms.utils = require(process.env.PROJECT_ROOT + "/src/utils/index.js")(cms);
	return cms;
}