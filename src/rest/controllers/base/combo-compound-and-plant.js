const Controller = require(__dirname + "/../controller.js");

class ComboCompoundAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_compound_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-compound-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-compound-and-plant.js")
	}

}

module.exports = ComboCompoundAndPlantBaseController;