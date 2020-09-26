const Middleware = require(__dirname + "/../middleware.js");

class SessionsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "sessions";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/sessions.js")
	}

}

module.exports = SessionsBaseMiddleware;