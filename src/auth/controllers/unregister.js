/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/unregister.js`
 * 
 * @name `unregister`
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
module.exports = () => async function(request, response, next) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		const session_token = cms.utils.formatBearerToken(request.headers.Authorization);
		const password = request.body.password;
		const data = await cms.auth.actors.unregister({ session_token, password, auth: request.fw.auth });
		cms.utils.successfulJsonResponse(data, request, response, next);
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};