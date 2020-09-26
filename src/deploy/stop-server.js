/**
 * 
 * ----
 * 
 * ### `/src/deploy/stop-server.js`
 * 
 * @name `stopServer`
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
module.exports = async function(cms) {
	try {
		cms.utils.trace("cms.deploy.stopServer");
		cms.hooks.trigger("project.on-stop-server", {});
		try {
			await cms.server.close();
		} catch (error) {}
		try {
			await cms.history.connection.end();
		} catch (error) {}
		try {
			await cms.rest.connection.end();
		} catch (error) {}
		try {
			await cms.auth.connection.end();
		} catch (error) {}
		try {
			await cms.process.connection.end();
		} catch (error) {}
		try {
			await cms.socket.server.close();
		} catch (error) {}
		cms.hooks.trigger("project.on-stopped-server", {});
		cms.utils.trace("cms.deploy.stopServer: OK.");
	} catch (error) {
		console.error("ERROR stopping server:", error);
		throw error;
	}
}