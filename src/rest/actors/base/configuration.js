const Actor = require(__dirname + "/../actor.js");

class ConfigurationBaseActor extends Actor {
	
	static get Table() {
		return "configuration";
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
module.exports = ConfigurationBaseActor;