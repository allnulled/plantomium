const <%-tableData.model%>BaseMiddleware = require(__dirname + "/base/<%-table.replace(/_/g, "-")%>.js");

class <%-tableData.model%>Middleware extends <%-tableData.model%>BaseMiddleware {

}

/**
 * 
 * ----
 * 
 * ### `/src/deploy/regenerate-rest/generated/templates/table.middleware.js`
 * 
 * @name `table.middleware`
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
module.exports = <%-tableData.model%>Middleware;