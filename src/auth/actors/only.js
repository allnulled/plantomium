/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/only.js`
 * 
 * @location `cms.auth.actors.only`
 * @name only
 * @type `AsyncFunction`
 * @receives
 * @receives - `rules:Object` - rules to accomplish.
 * @receives - `rules.users:Array<String>` - list of valid `user.name`s.
 * @receives - `rules.groups:Array<String>` - list of valid `group.name`s.
 * @receives - `rules.permissions:Array<String>` - list of valid `permission.name`s.
 * @receives - `authParam:Object` - authentication of the `user`. Used as method of authentication.
 * @receives - `session_token:String` - `session_token` of the `session` of the `user`. Used as method of authentication.
 * @receives - `options:Object` - extra options.
 * @receives - `options.request:Object` - `Request` object of the <@-_("express");@>. Used to decorate it at `request.fw.auth`, and as method of authentication.
 * @returns
 * @returns - `Promise<isValid:Boolean>` - returns `true` if:
 * @returns    · when there are `users`, it has at least one, and:
 * @returns    · when there are `groups`, it has at least one, and:
 * @returns    · when there are `permissions`, it has at least one.
 * @returns
 * @returns Otherwise, it returns `false`.
 * @throws
 * @throws - `[ERR:4816]`: affected to 0 `session`s.
 * @throws - `[ERR:9816]`: affected to multiple `session`s.
 * @description method that deletes an existing session of the user.
 * 
 * 
 */
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(rules, authParam = undefined, session_token = undefined, options = {}) {
	try {
		cms.utils.trace("cms.auth.actors.only");
		if(!Array.isArray(rules)) {
			throw new Error("Required <rules> to be an array on <cms.auth.actors.only> [ERR:560]");
		}
		const auth = await cms.utils.authenticate(authParam, session_token, options.request);
		let isAnything = false;
		AllRules:
		for(let index=0; index < rules.length; index++) {
			const rule = rules[index];
			const [opType, subrules, subextra = {}] = rule;
			const opMethod = "only" + opType.substr(0,1).toUpperCase() + opType.substr(1);
			if(opMethod === "onlyAuthenticated") {
				continue AllRules;
			}
			const action = cms.auth.actors[opMethod];
			if(typeof action !== "function") {
				throw new Error("Invalid operation <" + opMethod + "> on <cms.auth.actors.only> [ERR:055]");
			}
			const is = await action(subrules, auth, session_token, options);
			if(is) {
				isAnything = true;
				break AllRules;
			}
		}
		if(options.returnAll === true) {
			return {auth, valid: isAnything};
		}
		return isAnything;
	} catch(error) {
		throw error;
	}
}