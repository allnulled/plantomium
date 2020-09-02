const Actor = require(__dirname + "/../actor.js");

class HistoryEventBaseActor extends Actor {
	
	static get Table() {
		return "history_event";
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
module.exports = HistoryEventBaseActor;