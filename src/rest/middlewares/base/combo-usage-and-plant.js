const Middleware = require(__dirname + "/../middleware.js");

class ComboUsageAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_usage_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-usage-and-plant.js")
	}

}

module.exports = ComboUsageAndPlantBaseMiddleware;