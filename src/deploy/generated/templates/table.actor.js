const <%-tableData.model%>BaseActor = require(__dirname + "/base/<%-table.replace(/_/g, "-")%>.js");

class <%-tableData.model%>Actor extends <%-tableData.model%>BaseActor {

}

/**
 * 
 * ----
 * 
 * ### `/src/deploy/generated/templates/table.actor.js`
 * 
 * @name `table.actor`
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
module.exports = <%-tableData.model%>Actor;