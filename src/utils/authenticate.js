module.exports = async function(authParam, session_token, request) {
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.utils.authenticate");
		let auth = typeof authParam === "object" ? authParam : cms.utils.dataGetter(request, ["fw", "auth"], false);
		if(!auth) {
			if(typeof session_token !== "string") {
				throw new Error("Unauthorized resource: Could not identify user due to a lack of credentials [ERR:5000]");
			}
			auth = await cms.auth.actors.authenticate({ session_token });
		}
		if(typeof request === "object") {
			request.fw.auth = auth;
		}
		return auth;
	} catch(error) {
		throw error;
	}
};