const Actor = require(__dirname + "/../actor.js");

class ExampleProcessBaseActor extends Actor {
	
	static get Table() {
		return "example_process";
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
module.exports = ExampleProcessBaseActor;