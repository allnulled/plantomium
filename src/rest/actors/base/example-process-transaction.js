const Actor = require(__dirname + "/../actor.js");

class ExampleProcessTransactionBaseActor extends Actor {
	
	static get Table() {
		return "example_process_transaction";
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
module.exports = ExampleProcessTransactionBaseActor;