const Middleware = require(__dirname + "/../middleware.js");

class ChatroomMessageBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chatroom_message";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom-message.js")
	}

}

module.exports = ChatroomMessageBaseMiddleware;