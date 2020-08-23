const Middleware = require(__dirname + "/../middleware.js");

class PermissionsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "permissions";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/permissions.js")
	}

}

module.exports = PermissionsBaseMiddleware;