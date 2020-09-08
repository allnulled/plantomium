const Controller = require(__dirname + "/../controller.js");

class ChatroomParticipantBaseController extends Controller {
	
	static get Table() {
		return "chatroom_participant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom-participant.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/chatroom-participant.js")
	}

}

module.exports = ChatroomParticipantBaseController;