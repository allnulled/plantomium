const Actor = require(__dirname + "/../actor.js");

class UsersBaseActor extends Actor {
	
	static get Table() {
		return "users";
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
module.exports = UsersBaseActor;