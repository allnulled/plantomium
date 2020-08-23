const Middleware = require(__dirname + "/../middleware.js");

class CompoundBaseMiddleware extends Middleware {
	
	static get Table() {
		return "compound";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/compound.js")
	}

}

module.exports = CompoundBaseMiddleware;