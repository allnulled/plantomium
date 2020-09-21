module.exports = function(socketClient) {
	const token = cms.utils.dataGetter(socketClient, ["handshake", "headers", "authorization"]);
	const session_token = cms.utils.formatBearerToken(token);
	return session_token;
}