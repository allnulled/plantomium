const Actor = require(__dirname + "/../actor.js");

class PlantBaseActor extends Actor {
	
	static get Table() {
		return "plant";
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
module.exports = PlantBaseActor;