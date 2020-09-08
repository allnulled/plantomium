module.exports = function(options = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	return async function(request, response, next) {
		try {
			cms.utils.trace("cms.auth.middlewares.onlyAuthenticated");
			const { auth, session_token } = cms.utils.getAuthenticationFromRequest(request);
			const isAuthenticated = await cms.auth.actors.onlyAuthenticated(auth, session_token, {request, ...options});
			if(isAuthenticated) {
				return next();
			}
			throw new Error("Unauthorized resource: could not get authentication [ERR:810]");
		} catch(error) {
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}