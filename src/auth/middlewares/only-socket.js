module.exports = function(requireRules = {}, excludeRules = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.auth.middleware.onlySocket");
	return async function(socket, next) {
		cms.utils.trace("cms.auth.middleware.onlySocket");
		try {
			const session_token = cms.utils.getAuthenticationFromSocket(socket);
			const authentication = await cms.utils.actors.authenticate({ session_token });
			const canByRequire = cms.utils.checkPermissionsTo(authentication, requireRules, true);
			const canByExclude = cms.utils.checkPermissionsTo(authentication, excludeRules, false);
			dd(socket);
			if(canByRequire && canByExclude) {
				return next()
			}
			throw new Error("Required to accomplish authorization [ERR:9807]");
		} catch(error) {
			return next(error, false);
		}
	}
};