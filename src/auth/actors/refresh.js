/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/refresh.js`
 * 
 * @name `refresh`
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
			throw new Error("No session found on <refresh>");
		} else if(updateSessionResult.affectedRows !== 1) {
			throw new Error("No session found on <refresh> (anomaly)");
		}
		return {
			session_token: new_session_token,
			refresh_token: new_refresh_token,
		}
	} catch(error) {
		throw error;
	}
};