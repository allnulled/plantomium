const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(permissions, authParam = undefined, session_token = undefined, extra = {}) {
	try {
		cms.utils.trace("cms.auth.actors.onlyPermissions");
		if(!Array.isArray(permissions)) {
			throw new Error("Required <permissions> to be an array on <cms.auth.actors.onlyPermissions> [ERR: 842]");
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