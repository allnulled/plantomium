/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/unregister.js`
 * 
 * @name `unregister`
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
		cms.utils.trace("cms.auth.actors.unregister");
		// @TODO: 
		parameters.id = parameters.auth.user.id;
		const selectUserQuery = cms.auth.queries.selectUserById({ parameters });
		const users = await cms.auth.query(selectUserQuery);
		if(users.length === 0) {
			throw new Error("No user found on <unregister>");
		} else if(users.length !== 1) {
			throw new Error("No user found on <unregister> (anomaly)");
		}
		// compare password too
		const user = cms.utils.toObjectSql(users, "users")[0];
		const isPassword = await cms.utils.comparePassword(parameters.password, user.password);
		if(isPassword === false) {
			throw new Error("Required password to be correct on unregister")
		}
		parameters.user_id = user.id;
		parameters.deactivation = 1;
		const deleteUserQuery = cms.auth.queries.deleteUser({ parameters });
		const deleteResponse = await cms.auth.query(deleteUserQuery);
		if(deleteResponse.affectedRows === 0) {
			throw new Error("No user found to delete on <unregister>");
		}
		return {
			message: "Your user was successfully logged out and removed. We will miss you."
		};
	} catch(error) {
		throw error;
	}
};