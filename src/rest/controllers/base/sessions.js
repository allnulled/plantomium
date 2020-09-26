const Controller = require(__dirname + "/../controller.js");

class SessionsBaseController extends Controller {
	
	static get Table() {
		return "sessions";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/sessions.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/sessions.js")
	}

}

module.exports = SessionsBaseController;