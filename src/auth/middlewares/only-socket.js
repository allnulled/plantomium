module.exports = function(rules = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const { authenticated = false, users = [], groups = [], permissions = [] } = rules;
	return async function(packetdata, next) {
		try {
			// 1. Init session:
			///////////////////////////////////////////////////////////
			const session_token_brute = packetdata.handshake.headers.authorization;
			const session_token = cms.utils.formatBearerToken(session_token_brute);
			let sessionData = undefined;
			try {
				sessionData = await cms.auth.actors.authenticate({ session_token });
			} catch(error) {}
			if(!sessionData) {
				throw new Error("Required authentication [ERR:2204]");
			}
			packetdata.fw = { auth: sessionData };
			// 2. Do checkings:
			///////////////////////////////////////////////////////////
			let isOneUser = false, hasOneGroup = false, hasOnePermission = false;
			CheckingUsers:
			if(users.length) {
				if(users.indexOf(sessionData.user.name) !== -1) {
					isOneUser = true;
				}
			} else {
				isOneUser = true;
			}
			///////////////////////////////////////////////////////////
			CheckingGroups:
			if(groups.length) {
				for(let index=0; index < groups.length; index++) {
					if(groupnames.indexOf(groups[index]) !== -1) {
						hasOneGroup = true;
						break CheckingGroups;
					}
				}
			} else {
				hasOneGroup = true;
			}
			///////////////////////////////////////////////////////////
			CheckingPermission:
			if(permissions.length) {
				for(let index=0; index < permissions.length; index++) {
					if(permissionnames.indexOf(permissions[index]) !== -1) {
						hasOnePermission = true;
						break CheckingPermission;
					}
				}
			} else {
				hasOnePermission = true;
			}
			// 3. Filter by authorization:
			///////////////////////////////////////////////////////////
			if((!isOneUser) || (!hasOneGroup) || (!hasOnePermission)) {
				throw new Error("Resource not authorized [ERR:2201]");
			}
			return next();
		} catch(error) {
			packetdata.client.disconnect();
			throw error;
		}
	}
};