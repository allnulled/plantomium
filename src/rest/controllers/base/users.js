const Controller = require(__dirname + "/../controller.js");

class UsersBaseController extends Controller {
	
	static get Table() {
		return "users";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/users.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/users.js")
	}

}

module.exports = UsersBaseController;