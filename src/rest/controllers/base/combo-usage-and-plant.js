const Controller = require(__dirname + "/../controller.js");

class ComboUsageAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_usage_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-usage-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-usage-and-plant.js")
	}

}

module.exports = ComboUsageAndPlantBaseController;