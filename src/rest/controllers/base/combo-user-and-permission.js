const Controller = require(__dirname + "/../controller.js");

class ComboUserAndPermissionBaseController extends Controller {
	
	static get Table() {
		return "combo_user_and_permission";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-user-and-permission.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-user-and-permission.js")
	}

}

module.exports = ComboUserAndPermissionBaseController;