/**
 * 
 * ----
 * 
 * ### `/src/auth/controllers/login.js`
 * 
 * @name `login`
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
	cms.utils.trace("cms.auth.controllers.login");
	try {
		const { name, email, password } = request.body;
		const data = await cms.auth.actors.login({ name, email, password });
		cms.utils.successfulJsonResponse(data, request, response, next);
		return data;
	} catch(error) {
		cms.utils.erroneousJsonResponse(error, request, response, next);
	}
};