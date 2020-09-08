const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(groups, authParam = undefined, session_token = undefined, extra = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyGroups");
		const auth = await cms.utils.authenticate(authParam, session_token, extra.request);
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