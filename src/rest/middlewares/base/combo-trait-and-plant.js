const Middleware = require(__dirname + "/../middleware.js");

class ComboTraitAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_trait_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-trait-and-plant.js")
	}

}

module.exports = ComboTraitAndPlantBaseMiddleware;