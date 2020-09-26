const Middleware = require(__dirname + "/../middleware.js");

class ComboUserAndPermissionBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_user_and_permission";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-user-and-permission.js")
	}

}

module.exports = ComboUserAndPermissionBaseMiddleware;