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
	} catch (error) {
		cms.utils.debugError("stopping server:", error);
		throw error;
	}
}