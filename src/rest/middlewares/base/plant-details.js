const Middleware = require(__dirname + "/../middleware.js");

class PlantDetailsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "plant_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/plant-details.js")
	}

}

module.exports = PlantDetailsBaseMiddleware;