const Middleware = require(__dirname + "/../middleware.js");

class SpecimenBaseMiddleware extends Middleware {
	
	static get Table() {
		return "specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/specimen.js")
	}

}

module.exports = SpecimenBaseMiddleware;