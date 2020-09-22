/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/recover.js`
 * 
 * @name `recover`
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
		cms.utils.trace("cms.auth.actors.recover");
		// select user by name or email:
		const selectUserQuery = cms.auth.queries.selectUserByNameOrEmail({
			parameters
		});
		const users = await cms.auth.query(selectUserQuery);
		// report errors:
		if (users.length === 0) {
			throw new Error("No user found on <recover>");
		} else if (users.length !== 1) {
			throw new Error("No user found on <recover> (anomaly)");
		}
		const user = cms.utils.toObjectSql(users, "users")[0];
		// return recovery token:
		// return recovery token (should be EMAIL SUCCESSFULLY SENT):
		const output = { message: "Email sent to your account's email successfully" };
		return ["development", "test"].indexOf(process.env.NODE_ENV) !== -1 ? output : { ...output, recovery_token: user.recovery_token };
	} catch (error) {
		throw error;
	}
};