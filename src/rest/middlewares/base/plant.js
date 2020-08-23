const Middleware = require(__dirname + "/../middleware.js");

class PlantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "plant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/plant.js")
	}

}

module.exports = PlantBaseMiddleware;