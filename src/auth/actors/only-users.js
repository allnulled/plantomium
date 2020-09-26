/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/only-users.js`
 * 
 * @location `cms.auth.actors.onlyUsers`
 * @name onlyUsers
 * @type `AsyncFunction`
 * @receives
 * @receives - `users:Array<String>` - list of valid `user.name`s.
 * @receives - `authParam:Object` - authentication of the `user`. Used as method of authentication.
 * @receives - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.
 * @receives - `options:Object` - extra options.
 * @receives - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.
 * @returns
 * @returns - `Promise<isValid:Boolean>` - returns `true` if:
 * @returns    - there are `users`, and it has at least one.
 * @returns    - there are no `users`.
 * @returns
 * @returns Otherwise, it returns `false`.
 * @throws
 * @throws - `[ERR:1342]`: `users` must be an array.
 * @description method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) is any of the specified `users`, or if there are no `users` at all (in both cases, it return `true`, otherwise, `false`).
 * 
 * 
 */
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