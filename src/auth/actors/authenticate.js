const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/authenticate.js`
 * 
 * @location `cms.auth.actors.authenticate`
 * @name authenticate
 * @type `async function`
 * @receives
 * @receives - `parameters:Object` - user password and name or email
 * @returns
 * @returns - `Promise<data:Object>`
 * @returns - `Promise<data.user:Object>` - data of the user itself
 * @returns - `Promise<data.groups:Object>` - data of the user groups
 * @returns - `Promise<data.permssions:Object>` - data of the user permissions
 * @returns - `Promise<data.sessions:Object>` - data of the user sessions
 * @throws
 * @throws - `No user found on authenticate`
 * @description method that gets the session data and inserts a new session.
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		cms.utils.trace("cms.auth.actors.authenticate");
		const { session_token, request = undefined } = parameters;
		if(typeof session_token !== "string") {
			throw new Error("Required <session_token> to be a string on <authenticate> [ERR:8803]");
		}
		const authenticationQuery = cms.auth.queries.authenticate({ parameters });
		const authenticationResult = await cms.auth.query(authenticationQuery);
		if(authenticationResult.length === 0) {
			throw new Error("Required <user> to exist on <authenticate> [ERR:999]");
		}
		const users = cms.utils.toObjectSql(authenticationResult, "users", "id");
		const user = users[0];
		const groups = cms.utils.toObjectSql(authenticationResult, "groups", "id");
		const permissions = cms.utils.toObjectSql(authenticationResult, "permissions", "id");
		const sessions = cms.utils.toObjectSql(authenticationResult, "sessions", "id");
		const authentication = { user, groups, permissions, sessions };
		if(typeof request === "object") {
			request.fw.auth = authentication;
			request.fw.authToken = session_token;
		}
		cms.utils.debug("successfully authenticated:", authentication);
		return authentication;
	} catch (error) {
		throw error;
	}
};