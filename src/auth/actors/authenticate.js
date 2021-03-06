const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/authenticate.js`
 * 
 * @location `cms.auth.actors.authenticate`
 * @name authenticate
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - user password and name or email
 * @receives    - `parameters.name:String` - user name
 * @receives    - `parameters.email:String` - user email
 * @receives    - `parameters.password:String` - user password
 * @returns
 * @returns - `Promise<data:Object>` - data of the authentication:
 * @returns    - `data.user:Object` - data of the user itself
 * @returns    - `data.groups:Array<Object>` - all the groups of the user
 * @returns    - `data.permssions:Array<Object>` - all the permissions of the user
 * @returns    - `data.sessions:Array<Object>` - all the sessions of the user
 * @throws
 * @throws - `[ERR:8803]`: `session_token` must be a string
 * @throws - `[ERR:999]`: `user` must be exist
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