const fs = require("fs");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms auth login")
	try {
		const sessionFile = process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json";
		const sessionData = (function() {
			try {
				return require(sessionFile);
			} catch(error) {
				return {};
			}
		})();
		const { session_token = false } = sessionData;
		if(!session_token) {
			throw new Error("No sessions opened.");
		}
		const ClientSideAPI = require(process.env.PROJECT_ROOT + "/src/client/api.js");
		const client = new ClientSideAPI();
		const logoutData = await client.auth.logout({}, {
			headers: {
				authorization: "Bearer: " + session_token
			}
		});
		fs.writeFileSync(sessionFile, "{}", "utf8");
		LL(logoutData)
	} catch(error) {
		console.error(error);
	}

}