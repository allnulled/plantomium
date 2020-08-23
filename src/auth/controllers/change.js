const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/change.js`
 * 
 * @name `change`
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
		const data = await cms.auth.actors.change({
			password: request.body.password,
			recovery_token: cms.utils.formatBearerToken(request.body.recovery_token)
		});
		cms.utils.successfulJsonResponse(data, request, response, next);
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};