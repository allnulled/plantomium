module.exports = function(rules = [], options = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	return async function(request, response, next) {
		try {
			cms.utils.trace("cms.auth.middlewares.onlyUsers");
			const { auth, session_token } = cms.utils.getAuthenticationFromRequest(request);
			const isUser = await cms.auth.actors.onlyUsers(rules, auth, session_token, {request, ...options});
			if(isUser) {
				return next();
			}
			throw new Error("401: Unauthorized resource [ERR:813]");
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}