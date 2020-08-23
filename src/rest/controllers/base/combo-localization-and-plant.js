const Controller = require(__dirname + "/../controller.js");

class ComboLocalizationAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_localization_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-localization-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-localization-and-plant.js")
	}

}

module.exports = ComboLocalizationAndPlantBaseController;