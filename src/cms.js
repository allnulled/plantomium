const cms = { settings: {} };
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
require(__dirname + "/deploy/load-env.js")(cms);
require("nodelive").PREFERRED_EDITOR = process.env.PREFERRED_EDITOR || "gedit";
require(__dirname + "/deploy/load-api.js")(cms);




