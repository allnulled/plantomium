const Controller = require(__dirname + "/../controller.js");

class PlantBaseController extends Controller {
	
	static get Table() {
		return "plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/plant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/plant.js")
	}

}

module.exports = PlantBaseController;