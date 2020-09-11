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
		await cms.server.close();
		await cms.history.connection.end();
		await cms.rest.connection.end();
		await cms.auth.connection.end();
		await cms.process.connection.end();
		await cms.socket.server.close();
		cms.utils.trace("cms.deploy.stopServer: OK.");
	} catch (error) {
		console.error("ERROR stopping server:", error);
		throw error;
	}
}