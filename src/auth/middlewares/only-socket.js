module.exports = function(requireRules = {}, excludeRules = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.auth.middleware.onlySocket");
	return async function(socket, next) {
		let dispatched = false;
		const got = (...args) => {
			if(!dispatched) {
				dispatched = true;
				return next(...args);
			}
		}
		cms.utils.trace("cms.auth.middleware.onlySocket (1)");
		try {
			const session_token = cms.utils.getAuthenticationFromSocket(socket);
			if(typeof session_token !== "string") {
				throw new Error("Required <session_token> to exist on <onlySocket> [ERR:4744]");
			}
			let authentication = await cms.auth.actors.authenticate({ session_token });
			const canByRequire = cms.utils.checkPermissionsTo(authentication, requireRules, true);
			const canByExclude = cms.utils.checkPermissionsTo(authentication, excludeRules, false);
			if(canByRequire && canByExclude) {
				return got();
			}
			throw new Error("Required to accomplish authorization rules [ERR:9807]");
		} catch(error) {
			return got(error, false);
		}
	}
};