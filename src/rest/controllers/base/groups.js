const Controller = require(__dirname + "/../controller.js");

class GroupsBaseController extends Controller {
	
	static get Table() {
		return "groups";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/groups.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/groups.js")
	}

}

module.exports = GroupsBaseController;