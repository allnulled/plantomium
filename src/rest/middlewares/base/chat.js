const Middleware = require(__dirname + "/../middleware.js");

class ChatBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chat";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chat.js")
	}

}

module.exports = ChatBaseMiddleware;