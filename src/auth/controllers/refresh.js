/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/refresh.js`
 * 
 * @name `refresh`
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
		const session_token = cms.utils.formatBearerToken(request.headers.authorization);
		const refresh_token = request.body.refresh_token;
		const data = await cms.auth.actors.refresh({ session_token, refresh_token });
		cms.utils.successfulJsonResponse(data, request, response, next);
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};