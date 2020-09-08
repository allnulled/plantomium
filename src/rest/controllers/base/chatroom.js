const Controller = require(__dirname + "/../controller.js");

class ChatroomBaseController extends Controller {
	
	static get Table() {
		return "chatroom";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chatroom.js")
	}

}

module.exports = ChatroomBaseController;