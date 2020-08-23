const Middleware = require(__dirname + "/../middleware.js");

class ComboLocalizationAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_localization_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-localization-and-plant.js")
	}

}

module.exports = ComboLocalizationAndPlantBaseMiddleware;