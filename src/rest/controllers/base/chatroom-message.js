const Controller = require(__dirname + "/../controller.js");

class ChatroomMessageBaseController extends Controller {
	
	static get Table() {
		return "chatroom_message";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom-message.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chatroom-message.js")
	}

}

module.exports = ChatroomMessageBaseController;