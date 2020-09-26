const bcrypt = require("bcrypt");
const asynchandler = require("@allnulled/asynchandler");

/**
 * 
 * ----
 * 
 * ### `/src/utils/compare-password.js`
 * 
 * @name `comparePassword`
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
module.exports = function(passwordTry, passwordHash) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.comparePassword");
	return new Promise(function(ok, fail) {
		bcrypt.compare(passwordTry, passwordHash, asynchandler(ok, fail));
	});
}