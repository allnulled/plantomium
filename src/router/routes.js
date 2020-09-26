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
	cms.utils.trace("cms.router");
	cms.hooks.trigger("project.on-mount-router");
	importFresh(__dirname + "/rest.js")(cms, router);
	importFresh(__dirname + "/auth.js")(cms, router);
	importFresh(__dirname + "/history.js")(cms, router);
	importFresh(__dirname + "/json.js")(cms, router);
	importFresh(__dirname + "/process.js")(cms, router);
	cms.hooks.trigger("project.on-mounted-router");
	cms.utils.printRoutes(router);
}