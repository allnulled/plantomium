/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/only-permissions.js`
 * 
 * @location `cms.auth.actors.onlyPermissions`
 * @name onlyPermissions
 * @type `AsyncFunction`
 * @receives
 * @receives - `permissions:Array<String>` - list of valid `permission.name`s.
 * @receives - `authParam:Object` - authentication of the `user`. Used as method of authentication.
 * @receives - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.
 * @receives - `options:Object` - extra options.
 * @receives - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.
 * @returns
 * @returns - `Promise<isValid:Boolean>` - returns `true` if:
 * @returns    - there are `permissions`, and it has at least one.
 * @returns    - there are no `permissions`.
 * @returns
 * @returns Otherwise, it returns `false`.
 * @throws
 * @throws - `[ERR:1342]`: `permissions` must be an array.
 * @description method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) owns any of the specified `permissions`, or if there are no `permissions` at all (in both cases, it return `true`, otherwise, `false`).
 * 
 * 
 */
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(permissions, authParam = undefined, session_token = undefined, extra = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyPermissions");
		if(!Array.isArray(permissions)) {
			throw new Error("Required <permissions> to be an array on <cms.auth.actors.onlyPermissions> [ERR:1342]");
		}
		const auth = await cms.utils.authenticate(authParam, session_token, extra.request);
		let hasPermission = false;
		CheckingCredentials:
		for(let index=0; index < permissions.length; index++) {
			const permission = permissions[index];
			for(let index=0; index < auth.permissions.length; index++) {
				const ownedPermission = auth.permissions[index];
				if(permission === ownedPermission.name) {
					hasPermission = true;
					break CheckingCredentials;
				}
			}
		}
		return hasPermission;
	} catch(error) {
		throw error;
	}
}