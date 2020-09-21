const Controller = require(__dirname + "/../controller.js");

class PlantDetailsBaseController extends Controller {
	
	static get Table() {
		return "plant_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/plant-details.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/plant-details.js")
	}

}

module.exports = PlantDetailsBaseController;