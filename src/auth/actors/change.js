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
 * @type `async function`
 * @receives
 * @receives - `parameters:Object` - parameters to change a user password.
 * @receives - `parameters.recovery_token:String` - previous recovery_token of the user.
 * @receives - `parameters.password:String` - new password.
 * @returns
 * @returns - `Promise<data:Object>`
 * @returns - `Promise<data.message:String>` - a message confirming the operation.
 * @throws
 * @throws - `No user found on change` - select returned 0 items
 * @throws - `No user found on change (anomaly)` - select returned more than 1 item
 * @throws - `No user found to update on change` - affectedRows of update is 0
 * @description method that changes the password of a user
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		cms.utils.trace("cms.auth.actors.change");
		const selectUserQuery = cms.auth.queries.selectUserByRecoveryToken({ parameters });
		const users = await cms.auth.query(selectUserQuery);
		if(users.length === 0) {
			throw new Error("No user found on change");
		} else if(users.length !== 1) {
			throw new Error("No user found on change (anomaly)");
		}
		const user = cms.utils.toObjectSql(users, "users")[0];
		parameters.originalPassword = parameters.password;
		parameters.password = await cms.utils.encryptPassword(parameters.originalPassword);
		parameters.user_id = user.id;
		const updateUserQuery = cms.auth.queries.updateUserPasswordAndToken({ parameters });
		const updateUserResult = await cms.auth.query(updateUserQuery);
		if(updateUserResult.affectedRows === 0) {
			throw new Error("No user found to update on change");
		}
		return {
			message: "Your password was successfully changed.",
		};
	} catch(error) {
		throw error;
	}
};