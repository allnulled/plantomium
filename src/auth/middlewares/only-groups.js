module.exports = function(rules = [], options = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.auth.middlewares.onlyGroups");
	return async function(request, response, next) {
		try {
			cms.utils.trace("cms.auth.middlewares.onlyGroups (1)");
			const { auth, session_token } = cms.utils.getAuthenticationFromRequest(request);
			const isInGroups = await cms.auth.actors.onlyGroups(rules, auth, session_token, {request, ...options});
			if(isInGroups) {
				return next();
			}
			throw new Error("401: Unauthorized resource [ERR:811]");
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}