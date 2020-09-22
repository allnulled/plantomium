module.exports = function(request) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getAuthenticationFromRequest");
	const auth = cms.utils.dataGetter(request, ["fw", "auth"], undefined);
	const token = cms.utils.dataGetter(request, ["headers", "authorization"], undefined);
	const session_token = cms.utils.formatBearerToken(token);
	return { auth, session_token };
}