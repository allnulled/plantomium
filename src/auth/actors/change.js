const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const bcrypt = require("bcrypt");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/change.js`
 * 
 * @location `cms.auth.actors.change`
 * @name change
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - parameters to change the `password` of a `user`.
 * @receives    - `parameters.recovery_token:String` - previous `recovery_token` of the `user`.
 * @receives    - `parameters.password:String` - new `password`.
 * @returns
 * @returns - `Promise<data:Object>` - the output data
 * @returns - `Promise<data.message:String>` - a message confirming the operation. `"Your password was successfully changed."`
 * @throws
 * @throws - `[ERR:5064]`: `user` not found
 * @throws - `[ERR:5094]`: `user` found multiple times.
 * @throws - `[ERR:5774]`: no `user` was affected by the change.
 * @description method that changes the password of a `user`.
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		cms.utils.trace("cms.auth.actors.change");
		const selectUserQuery = cms.auth.queries.selectUserByRecoveryToken({ parameters });
		const users = await cms.auth.query(selectUserQuery);
		if(users.length === 0) {
			throw new Error("Required <user> to exist on <change> [ERR:5064]");
		} else if(users.length !== 1) {
			throw new Error("Required <user> to exist only once on <change> (anomaly) [ERR:5094]");
		}
		const user = cms.utils.toObjectSql(users, "users")[0];
		parameters.originalPassword = parameters.password;
		parameters.password = await cms.utils.encryptPassword(parameters.originalPassword);
		parameters.user_id = user.id;
		const updateUserQuery = cms.auth.queries.updateUserPasswordAndToken({ parameters });
		const updateUserResult = await cms.auth.query(updateUserQuery);
		if(updateUserResult.affectedRows === 0) {
			throw new Error("Required <affectedRows> to be more than 1 on <change> (anomaly) [ERR:5774]");
		}
		return {
			message: "Your password was successfully changed.",
		};
	} catch(error) {
		throw error;
	}
};