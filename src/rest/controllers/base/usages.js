const Controller = require(__dirname + "/../controller.js");

class UsagesBaseController extends Controller {
	
	static get Table() {
		return "usages";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/usages.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/usages.js")
	}

}

module.exports = UsagesBaseController;