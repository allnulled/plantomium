const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/logout.js`
 * 
 * @name `logout`
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
	try {
		const data = await cms.auth.actors.logout({
			session_token: cms.utils.formatBearerToken(request.headers.authorization)
		});
		cms.utils.successfulJsonResponse(data, request, response, next);
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};