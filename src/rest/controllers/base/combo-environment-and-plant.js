const Controller = require(__dirname + "/../controller.js");

class ComboEnvironmentAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_environment_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-environment-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-environment-and-plant.js")
	}

}

module.exports = ComboEnvironmentAndPlantBaseController;