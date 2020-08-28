const Actor = require(__dirname + "/../actor.js");

class ComboGroupAndPermissionBaseActor extends Actor {
	
	static get Table() {
		return "combo_group_and_permission";
	}

}

/**
 * 
 * ----
 * 
 * ### `/src/deploy/regenerate-rest/generated/templates/table.actor.base.js`
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
module.exports = ComboGroupAndPermissionBaseActor;