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
	cms.email = {
		agents: cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/email/agents"),
		templates: cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/email/templates"),
	};
	cms.store = require(process.env.PROJECT_ROOT + "/src/store/index.js");
	return cms;
}