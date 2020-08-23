const Controller = require(__dirname + "/../controller.js");

class EnvironmentBaseController extends Controller {
	
	static get Table() {
		return "environment";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/environment.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/environment.js")
	}

}

module.exports = EnvironmentBaseController;