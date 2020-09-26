const Actor = require(__dirname + "/../actor.js");

class <%-tableData.model%>BaseActor extends Actor {
	
	static get Table() {
		return <%-JSON.stringify(table)%>;
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
module.exports = <%-tableData.model%>BaseActor;