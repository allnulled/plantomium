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
module.exports = function(token, defaultToken = null) {
	if(typeof token === "string") {
		return token.replace(/^Bearer\:? */g, "");
	}
	return defaultToken;
}