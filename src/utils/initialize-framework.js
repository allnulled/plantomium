/**
 * 
 * ----
 * 
 * ### `/src/utils/initialize-framework.js`
 * 
 * @name `initializeFramework`
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
module.exports = function(request, response, next) {
	if(typeof request.fw === "undefined") {
		request.fw = {
			auth: undefined,
			data: {},
		};
	}
	next();
}