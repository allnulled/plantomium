const Controller = require(__dirname + "/../controller.js");

class ChatMessagesBaseController extends Controller {
	
	static get Table() {
		return "chat_messages";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat-messages.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chat-messages.js")
	}

}

module.exports = ChatMessagesBaseController;