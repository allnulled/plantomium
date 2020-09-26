const Actor = require(__dirname + "/../actor.js");

class ChatMessageBaseActor extends Actor {
	
	static get Table() {
		return "chat_message";
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
module.exports = ChatMessageBaseActor;