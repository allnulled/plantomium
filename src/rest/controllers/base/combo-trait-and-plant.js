const Controller = require(__dirname + "/../controller.js");

class ComboTraitAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_trait_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-trait-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-trait-and-plant.js")
	}

}

module.exports = ComboTraitAndPlantBaseController;