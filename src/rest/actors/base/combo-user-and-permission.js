const Actor = require(__dirname + "/../actor.js");

class ComboUserAndPermissionBaseActor extends Actor {
	
	static get Table() {
		return "combo_user_and_permission";
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
module.exports = ComboUserAndPermissionBaseActor;