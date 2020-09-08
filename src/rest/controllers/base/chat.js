const Controller = require(__dirname + "/../controller.js");

class ChatBaseController extends Controller {
	
	static get Table() {
		return "chat";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chat.js")
	}

}

module.exports = ChatBaseController;