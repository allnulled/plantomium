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
	cms.server.listen(process.env.APP_PORT, function() {
		cms.utils.trace("cms.deploy.startServer: OK.");
		console.log("Server listening at:")
		console.log("http://127.0.0.1:" + process.env.APP_PORT);
		if(typeof callback === "function") {
			callback(cms);
		}
	});
}