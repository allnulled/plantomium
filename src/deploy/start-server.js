/**
 * 
 * ----
 * 
 * ### `/src/deploy/start-server.js`
 * 
 * @name `startServer`
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
module.exports = function(cms, callback) {
	cms.utils.trace("cms.deploy.startServer");
		cms.hooks.trigger("project.on-start-server", { });
	cms.server.listen(process.env.APP_PORT, function() {
		cms.utils.trace("cms.deploy.startServer: OK.");
		console.log("Server listening at:")
		console.log("https://127.0.0.1:" + process.env.APP_PORT);
		let result = undefined;
		if(typeof callback === "function") {
			result = callback(cms);
		}
		cms.hooks.trigger("project.on-started-server", { result });
	});
}