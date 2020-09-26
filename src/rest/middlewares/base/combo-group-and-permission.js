const Middleware = require(__dirname + "/../middleware.js");

class ComboGroupAndPermissionBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_group_and_permission";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-group-and-permission.js")
	}

}

module.exports = ComboGroupAndPermissionBaseMiddleware;