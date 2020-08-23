const Middleware = require(__dirname + "/../middleware.js");

class EnvironmentBaseMiddleware extends Middleware {
	
	static get Table() {
		return "environment";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/environment.js")
	}

}

module.exports = EnvironmentBaseMiddleware;