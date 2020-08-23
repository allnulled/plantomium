/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/confirm.js`
 * 
 * @name `confirm`
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
		const { confirmation_token } = request.body;
		const data = await cms.auth.actors.confirm({ confirmation_token });
		cms.utils.successfulJsonResponse(data, request, response, next);
		return data;
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};