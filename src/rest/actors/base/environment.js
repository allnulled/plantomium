const Actor = require(__dirname + "/../actor.js");

class EnvironmentBaseActor extends Actor {
	
	static get Table() {
		return "environment";
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
module.exports = EnvironmentBaseActor;