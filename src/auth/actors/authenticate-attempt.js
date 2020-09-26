const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/authenticate-attempt.js`
 * 
 * @location `cms.auth.actors.authenticateAttempt`
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
 * @description It does the same as the `cms.auth.actors.authenticate`, but it silences the error thrown.
 * 
 * 
 */
module.exports = (...params) => {
	cms.utils.trace("cms.auth.actors.authenticateAttempt")
	return cms.auth.actors.authenticate(...params).catch(error => error);
};
