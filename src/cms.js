const colors = require("colors");
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
Object.assign(cms, {
	utils: {
		trace(...args) {
			if (process.env.DEBUG_TRACES === "true") {
				console.log(colors.yellow("[TRACE]"), ...args);
			}
		}
	}
});
require(__dirname + "/deploy/load-env.js")(cms);
require("nodelive").PREFERRED_EDITOR = "subl" || "gedit";
require(__dirname + "/deploy/load-basic-api.js")(cms);
module.exports = cms;
require(__dirname + "/deploy/load-api.js")(cms);