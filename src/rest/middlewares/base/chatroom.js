const Middleware = require(__dirname + "/../middleware.js");

class ChatroomBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chatroom";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom.js")
	}

}

module.exports = ChatroomBaseMiddleware;