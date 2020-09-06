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
	cms.utils = require(process.env.PROJECT_ROOT + "/src/utils/index.js")(cms);
	cms.deploy = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/deploy");
	return cms;
}