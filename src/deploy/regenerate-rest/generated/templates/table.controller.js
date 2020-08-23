const <%-tableData.model%>BaseController = require(__dirname + "/base/<%-table.replace(/_/g, "-")%>.js");

class <%-tableData.model%>Controller extends <%-tableData.model%>BaseController {

}

/**
 * 
 * ----
 * 
 * ### `/src/deploy/regenerate-rest/generated/templates/table.controller.js`
 * 
 * @name `table.controller`
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
module.exports = <%-tableData.model%>Controller;