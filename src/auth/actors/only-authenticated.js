/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/only-authenticated.js`
 * 
 * @location `cms.auth.actors.onlyAuthenticated`
 * @name onlyAuthenticated
 * @type `AsyncFunction`
 * @receives
 * @receives - `authParam:Object` - authentication of the `user`. Used as method of authentication.
 * @receives - `session_token:String` - `session_token` of the `session` of the `user`.Used as method of authentication.
 * @receives - `options:Object` - extra options.
 * @receives - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.
 * @returns
 * @returns - `Promise<isValid:Boolean>` - returns `true` if there is at least 1 way of authentication. Otherwise, it returns `false`.
 * @throws Nothing.
 * @description method that tries to authenticate
 * 
 * 
 */
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(authParam, session_token, options = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyAuthenticated");
		const auth = await cms.utils.authenticate(authParam, session_token, options.request);
		return !!auth;
	} catch(error) {
		return false;
	}
}