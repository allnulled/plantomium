/**
 * 
 * ----
 * 
 * ### `/src/utils/successful-json-response.js`
 * 
 * @name `successfulJsonResponse`
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
module.exports = function(data, request, response, next) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.successfulJsonResponse");
	const date = new Date();
	const pad = cms.utils.pad;
	response.status(200).json({
		app: process.env.APP_NAME,
		meta: {
			http: `${request.method} ${request.originalUrl}`,
			time: pad(date.getFullYear(), 4) + "/" + pad(date.getMonth()+1, 2) + "/" + pad(date.getDate(), 2) + " " + pad(date.getHours(), 2) + "." + pad(date.getMinutes(), 2) + ":" + pad(date.getSeconds(), 2) + "." + pad(date.getMilliseconds(), 3),
			status: "OK",
			code: 200,
		},
		data,
	});
}