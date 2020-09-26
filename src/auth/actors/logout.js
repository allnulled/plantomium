/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/logout.js`
 * 
 * @location `cms.auth.actors.logout`
 * @name logout
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - parameters to logout.
 * @receives - `parameters.session_token:String` - `session_token` of the `session` to delete.
 * @returns
 * @returns - `Promise<data:Object>` - returned data.
 * @returns - `Promise<data.message:String>` - message confirming the operation. `"You are logged out now. We will miss you."`
 * @throws
 * @throws - `[ERR:4816]`: affected to 0 `session`s.
 * @throws - `[ERR:9816]`: affected to multiple `session`s.
 * @description method that deletes an existing session of the user.
 * 
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
			throw new Error("Required <session> to exist on <logout> [ERR:4816]");
		} else if(deletedSessionsResult.affectedRows !== 1) {
			throw new Error("Required <session> to exist only once on <logout> (anomaly) [ERR:9816]");
		}
		return {
			message: "You are logged out now. We will miss you."
		};
	} catch(error) {
		throw error;
	}
};