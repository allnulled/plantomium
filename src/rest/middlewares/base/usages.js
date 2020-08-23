const Middleware = require(__dirname + "/../middleware.js");

class UsagesBaseMiddleware extends Middleware {
	
	static get Table() {
		return "usages";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/usages.js")
	}

}

module.exports = UsagesBaseMiddleware;