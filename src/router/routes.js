const importFresh = require("import-fresh");

/**
 * 
 * ----
 * 
 * ### `/src/router/routes.js`
 * 
 * @name `routes`
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
module.exports = function(cms, router) {
	importFresh(__dirname + "/rest.js")(cms, router);
	importFresh(__dirname + "/auth.js")(cms, router);
	importFresh(__dirname + "/history.js")(cms, router);
}