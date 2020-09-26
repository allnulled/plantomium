/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/only-groups.js`
 * 
 * @location `cms.auth.actors.onlyGroups`
 * @name onlyGroups
 * @type `AsyncFunction`
 * @receives
 * @receives - `groups:Array<String>` - list of valid `group.name`s.
 * @receives - `authParam:Object` - authentication of the `user`. Used as method of authentication.
 * @receives - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.
 * @receives - `options:Object` - extra options.
 * @receives - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.
 * @returns
 * @returns - `Promise<isValid:Boolean>` - returns `true` if:
 * @returns    - there are `groups`, and it has at least one.
 * @returns    - there are no `groups`.
 * @returns
 * @returns Otherwise, it returns `false`.
 * @throws
 * @throws - `[ERR:7718]`: `groups` must be an array.
 * @description method that checks that the agent of authentication (`authParam`, `session_token` or `options.request`) belongs to any of the specified `groups`, or if there are no `groups` at all (in both cases, it return `true`, otherwise, `false`).
 * 
 * 
 */
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(groups, authParam = undefined, session_token = undefined, options = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyGroups");
		if(!Array.isArray(groups)) {
			throw new Error("Required <groups> to be an array on <cms.auth.actors.onlyGroups> [ERR:7718]");
		}
		const auth = await cms.utils.authenticate(authParam, session_token, options.request);
		let isInGroup = false;
		CheckingCredentials:
		for(let index=0; index < groups.length; index++) {
			const group = groups[index];
			for(let index=0; index < auth.groups.length; index++) {
				const activeGroup = auth.groups[index];
				if(group === activeGroup.name) {
					isInGroup = true;
					break CheckingCredentials;
				}
			}
		}
		return isInGroup;
	} catch(error) {
		throw error;
	}
}