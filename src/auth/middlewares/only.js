module.exports = function(rules = [], options = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	return async function(request, response, next) {
		try {
			cms.utils.trace("cms.auth.middlewares.only");
			const { auth, session_token } = cms.utils.getAuthenticationFromRequest(request);
			const isAnything = await cms.auth.actors.only(rules, auth, session_token, {request, ...options});
			if(isAnything) {
				return next();
			}
			throw new Error("Unauthorized resource: this user is not allowed to access the specified resource [ERR:814]");
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}