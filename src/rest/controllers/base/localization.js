const Controller = require(__dirname + "/../controller.js");

class LocalizationBaseController extends Controller {
	
	static get Table() {
		return "localization";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/localization.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/localization.js")
	}

}

module.exports = LocalizationBaseController;