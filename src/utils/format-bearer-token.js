/**
 * 
 * ----
 * 
 * ### `/src/utils/format-bearer-token.js`
 * 
 * @name `formatBearerToken`
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
module.exports = function(token, defaultToken = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.formatBearerToken");
	if(typeof token === "string") {
		return token.replace(/^Bearer\:? */g, "");
	}
	return defaultToken;
}