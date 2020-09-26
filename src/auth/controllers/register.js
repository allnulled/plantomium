/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/register.js`
 * 
 * @name `register`
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
	cms.utils.trace("cms.auth.controllers.register");
	try {
		const data = await cms.auth.actors.register({
			name: request.body.name,
			password: request.body.password,
			email: request.body.email,
			full_name: request.body.full_name,
		});
		cms.utils.successfulJsonResponse(data, request, response, next);
		return data;
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};