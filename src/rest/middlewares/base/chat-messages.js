const Middleware = require(__dirname + "/../middleware.js");

class ChatMessagesBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chat_messages";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat-messages.js")
	}

}

module.exports = ChatMessagesBaseMiddleware;