const Actor = require(__dirname + "/../actor.js");

class ChatroomParticipantBaseActor extends Actor {
	
	static get Table() {
		return "chatroom_participant";
	}

}

/**
 * 
 * ----
 * 
 * ### `/src/deploy/generated/templates/table.actor.base.js`
 * 
 * @name `table.actor.base`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = ChatroomParticipantBaseActor;