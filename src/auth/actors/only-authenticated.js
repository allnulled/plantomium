const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(authParam, session_token, extra = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyAuthenticated");
		const auth = await cms.utils.authenticate(authParam, session_token, extra.request);
		return !!auth;
	} catch(error) {
		return false;
	}
}