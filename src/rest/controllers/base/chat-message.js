const Controller = require(__dirname + "/../controller.js");

class ChatMessageBaseController extends Controller {
	
	static get Table() {
		return "chat_message";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat-message.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chat-message.js")
	}

}

module.exports = ChatMessageBaseController;