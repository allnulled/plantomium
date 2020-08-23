/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/recover.js`
 * 
 * @name `recover`
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
		const data = await cms.auth.actors.recover({
			name: request.body.name,
			email: request.body.email,
		});
		cms.utils.successfulJsonResponse(data, request, response, next);
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};