const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(users, authParam = undefined, session_token = undefined, extra = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyUsers");
		const auth = await cms.utils.authenticate(authParam, session_token, extra.request);
		return users.indexOf(auth.user.name) !== -1;
	} catch(error) {
		throw error;
	}
}