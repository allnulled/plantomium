const Actor = require(__dirname + "/../actor.js");

class FilesBaseActor extends Actor {
	
	static get Table() {
		return "files";
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
module.exports = FilesBaseActor;