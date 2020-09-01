const Controller = require(__dirname + "/../controller.js");

class ComboUserAndGroupBaseController extends Controller {
	
	static get Table() {
		return "combo_user_and_group";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-user-and-group.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-user-and-group.js")
	}

}

module.exports = ComboUserAndGroupBaseController;