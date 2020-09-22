/**
 * 
 * ----
 * 
 * ### `/src/utils/erroneous-json-response.js`
 * 
 * @name `erroneousJsonResponse`
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
module.exports = function(error, request, response, next) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.erroneousJsonResponse");
	const date = new Date();
	const pad = cms.utils.pad;
	const code = typeof error.code === "number" ? error.code : 500;
	response.status(200).json({
		app: process.env.APP_NAME,
		meta: {
			time: pad(date.getFullYear(), 4) + "/" + pad(date.getMonth()+1, 2) + "/" + pad(date.getDate(), 2) + " " + pad(date.getHours(), 2) + "." + pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2) + "." + pad(date.getMilliseconds(), 3),
			status: error.status || "Error",
			code,
		},
		error: {
			name: error.name || "unknown",
			message: error.message || null
		}
	});
	cms.utils.debugError("[ResponseError]:", error);
}