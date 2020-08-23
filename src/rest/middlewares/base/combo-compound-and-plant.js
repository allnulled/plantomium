const Middleware = require(__dirname + "/../middleware.js");

class ComboCompoundAndPlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_compound_and_plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-compound-and-plant.js")
	}

}

module.exports = ComboCompoundAndPlantBaseMiddleware;