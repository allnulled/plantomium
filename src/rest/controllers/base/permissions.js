const Controller = require(__dirname + "/../controller.js");

class PermissionsBaseController extends Controller {
	
	static get Table() {
		return "permissions";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/permissions.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/permissions.js")
	}

}

module.exports = PermissionsBaseController;