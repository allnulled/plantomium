const Controller = require(__dirname + "/../controller.js");

class ConfigurationBaseController extends Controller {
	
	static get Table() {
		return "configuration";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/configuration.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/configuration.js")
	}

}

module.exports = ConfigurationBaseController;