/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/refresh.js`
 * 
 * @location `cms.auth.actors.refresh`
 * @name refresh
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - parameters of the action.
 * @receives - `parameters.new_session_token:String` - new `session_token` of the `session`.
 * @receives - `parameters.new_refresh_token:String` - new `refresh_token` of the `session`.
 * @receives - `parameters.refresh_token:String` - previous `refresh_token` of the `session`.
 * @returns
 * @returns - `Promise<output:Object>` - data generated.
 * @returns    - `output.session_token:String`: new `session_token` of the `session`.
 * @returns    - `output.refresh_token`: new `refresh_token` of the `session`.
 * @throws
 * @throws - `[ERR:3891]`: `session` must exist.
 * @throws - `[ERR:9155]`: `session` must exist only once.
 * @description method that deletes an existing session of the user.
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.auth.actors.refresh");
		// @TODO: 
		const new_session_token = cms.utils.generateToken(200);
		const new_refresh_token = cms.utils.generateToken(200);
		const updateSessionQuery = cms.auth.queries.updateSessionByRefreshToken({
			parameters: {
				new_session_token,
				new_refresh_token,
				refresh_token: parameters.refresh_token,
			}
		});
		const updateSessionResult = await cms.auth.query(updateSessionQuery);
		if(updateSessionResult.affectedRows === 0) {
			throw new Error("Required <session> to exist on <refresh> [ERR:3891]");
		} else if(updateSessionResult.affectedRows !== 1) {
			throw new Error("Required <affectedRows> to be only 1 on <refresh> [ERR:9155]");
		}
		return {
			session_token: new_session_token,
			refresh_token: new_refresh_token,
		}
	} catch(error) {
		throw error;
	}
};