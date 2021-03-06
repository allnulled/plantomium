const Controller = require(__dirname + "/../controller.js");

class ComboImageAndPlantBaseController extends Controller {
	
	static get Table() {
		return "combo_image_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-image-and-plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-image-and-plant.js")
	}

}

module.exports = ComboImageAndPlantBaseController;