const Middleware = require(__dirname + "/../middleware.js");

class ChatMessageBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chat_message";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat-message.js")
	}

}

module.exports = ChatMessageBaseMiddleware;