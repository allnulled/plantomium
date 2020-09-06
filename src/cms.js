const cms = { settings: {} };
require("nodelive").PREFERRED_EDITOR = "gedit";
require(__dirname + "/deploy/load-env.js")(cms);
require(__dirname + "/deploy/load-api.js")(cms);

/**
 * 
 * ----
 * 
 * ### `/src/cms.js`
 * 
 * @name `cms`
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
module.exports = cms;



