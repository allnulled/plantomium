const Controller = require(__dirname + "/../controller.js");

class ComboGroupAndPermissionBaseController extends Controller {
	
	static get Table() {
		return "combo_group_and_permission";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-group-and-permission.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-group-and-permission.js")
	}

}

module.exports = ComboGroupAndPermissionBaseController;