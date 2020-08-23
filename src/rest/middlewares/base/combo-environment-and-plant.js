const Middleware = require(__dirname + "/../middleware.js");

class ComboEnvironmentAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_environment_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-environment-and-plant.js")
	}

}

module.exports = ComboEnvironmentAndPlantBaseMiddleware;