const Middleware = require(__dirname + "/../middleware.js");

class LocalizationBaseMiddleware extends Middleware {
	
	static get Table() {
		return "localization";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/localization.js")
	}

}

module.exports = LocalizationBaseMiddleware;