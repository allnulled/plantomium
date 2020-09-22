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
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.initializeFramework");
	if(typeof request.fw === "undefined") {
		request.fw = {
			auth: undefined,
			process: undefined,
			data: {},
		};
	}
	next();
}