const Middleware = require(__dirname + "/../middleware.js");

class ChatroomParticipantBaseMiddleware extends Middleware {
	
	static get Table() {
		return "chatroom_participant";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/chatroom-participant.js")
	}

}

module.exports = ChatroomParticipantBaseMiddleware;