/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/recover.js`
 * 
 * @location `cms.auth.actors.recover`
 * @name recover
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - parameters of the action.
 * @receives - `parameters.name:String` - 
 * @receives - `parameters.email:String` - 
 * @receives - `parameters.password:String` - 
 * @returns
 * @returns - `Promise<output:Object>` - data generated.
 * @returns    - `output.message:String`: message confirming the operation. `"Email sent to your account's email successfully."`
 * @returns    - `output.recovery_token`: this is only passed in `development` or `test` environments. Nevermind about this, in `production` it **must** not, and it does not.
 * @throws
 * @throws - `[ERR:3667]`: `user` must exist.
 * @throws - `[ERR:5079]`: `user` must exist only once.
 * @description method that deletes an existing session of the user.
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.auth.actors.recover");
		// select user by name or email:
		const selectUserQuery = cms.auth.queries.selectUserByNameOrEmail({
			parameters
		});
		const users = await cms.auth.query(selectUserQuery);
		// report errors:
		if (users.length === 0) {
			throw new Error("Required <user> to exist on <recover> [ERR:3667]");
		} else if (users.length !== 1) {
			throw new Error("Required <user> to exist only once on <recover> (anomaly) [ERR:5079]");
		}
		const user = cms.utils.toObjectSql(users, "users")[0];
		// return recovery token:
		// return recovery token (should be EMAIL SUCCESSFULLY SENT):
		const output = { message: "Email sent to your account's email successfully." };
		return ["development", "test"].indexOf(process.env.NODE_ENV) !== -1 ? output : { ...output, recovery_token: user.recovery_token };
	} catch (error) {
		throw error;
	}
};