module.exports = function(socketClient) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getAuthenticationFromSocket");
	const token = cms.utils.dataGetter(socketClient, ["handshake", "headers", "authorization"], undefined);
	const session_token = cms.utils.formatBearerToken(token, undefined);
	return session_token;
}