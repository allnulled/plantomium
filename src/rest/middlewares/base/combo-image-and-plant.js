const Middleware = require(__dirname + "/../middleware.js");

class ComboImageAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_image_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-image-and-plant.js")
	}

}

module.exports = ComboImageAndPlantBaseMiddleware;