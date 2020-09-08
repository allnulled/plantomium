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
		await cms.server.close();
		await cms.rest.connection.end();
		await cms.auth.connection.end();
		await cms.socket.server.close();
	} catch (error) {
		console.error("ERROR stopping server:", error);
		throw error;
	}
}