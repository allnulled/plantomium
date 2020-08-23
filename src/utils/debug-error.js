const colors = require("colors");

/**
 * 
 * ----
 * 
 * ### `/src/utils/debug-error.js`
 * 
 * @name `debugError`
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
module.exports = function(error, ...errors) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	let msg = "[ERROR";
	if(typeof error === "object" && error.name) {
		msg += ":" + error.name;
	}
	let i = 75 - msg.length;
	while(i <= 0) {
		msg += "-";
		i--;
	}
	msg += "]";
	console.log(colors.red(msg));
	if(cms.schema.general.debugErrors === true) {
		console.error(...errors);
	}
	console.log(colors.red("[/ERROR]"));
}