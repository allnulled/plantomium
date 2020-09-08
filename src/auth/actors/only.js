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