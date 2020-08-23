const Middleware = require(__dirname + "/../middleware.js");

class ConfigurationBaseMiddleware extends Middleware {
	
	static get Table() {
		return "configuration";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/configuration.js")
	}

}

module.exports = ConfigurationBaseMiddleware;