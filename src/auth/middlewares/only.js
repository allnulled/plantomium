/**
 * 
 * ----
 * 
 * ### `/src/auth/middlewares/only.js`
 * 
 * @name `onlyUsers`
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
module.exports = (options = {}) => async function(request, response, next) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const {
		authenticated = undefined, 
		users = undefined,
		groups = undefined,
		privileges = undefined
	} = options;
	const requestData = request;
	if(authenticated || users || groups || privileges) {
		cms.auth.actors.onlyAuthenticated();
	}
	if(users) {
		cms.auth.actors.onlyAuthenticated();
	}
	if(groups) {

	}
	if(privileges) {

	}
};