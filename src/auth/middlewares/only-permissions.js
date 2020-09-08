module.exports = function(rules = [], options = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	return async function(request, response, next) {
		try {
			cms.utils.trace("cms.auth.middlewares.onlyPermissions");
			const { auth, session_token } = cms.utils.getAuthenticationFromRequest(request);
			const hasPermission = await cms.auth.actors.onlyPermissions(rules, auth, session_token, {request, ...options});
			if(hasPermission) {
				return next();
			}
			throw new Error("401: Unauthorized resource [ERR:812]");
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}