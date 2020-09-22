/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/logout.js`
 * 
 * @name `logout`
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
module.exports = async function(parameters = {}) {
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.auth.actors.logout");
		// delete sessions where authenticated token:
		const deletedSessionsQuery = cms.auth.queries.deleteSessionByToken({ parameters });
		const deletedSessionsResult = await cms.auth.query(deletedSessionsQuery);
		// return report or message:
		if(deletedSessionsResult.affectedRows === 0) {
			throw new Error("No session found on <logout>");
		} else if(deletedSessionsResult.affectedRows !== 1) {
			throw new Error("No session found on <logout> (anomaly)");
		}
		return {
			message: "You are logged out now. We will miss you."
		};
	} catch(error) {
		throw error;
	}
};