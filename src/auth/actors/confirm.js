const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/confirm.js`
 * 
 * @location `cms.auth.actors.confirm`
 * @name confirm
 * @type `AsyncFunction`
 * @receives
 * @receives - `parameters:Object` - parameters to confirm an `unconfirmed_user`.
 * @receives - `parameters.confirmation_token:String` - confirmation_token of the `unconfirmed_user`.
 * @returns
 * @returns - `Promise<data:Object>` - data returned by confirmation
 * @returns - `Promise<data.id:Integer>` - `id` of the `user`.
 * @returns - `Promise<data.recovery_token:String>` - `recovery_token` produced by the confirmation operation.
 * @throws
 * @throws - `[ERR:5233]`: `confirmation_token` does not correspond to any `unconfirmed_user`.
 * @description method that confirms an `unconfirmed_user` as `user`.
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		cms.utils.trace("cms.auth.actors.confirm");
		// select all unconfirmed_users that: has same confirmation_token
		const selectUnconfirmedUsersQuery = cms.auth.queries.selectUnconfirmedUsersByConfirmationToken({ parameters });
		const [unconfirmedUser] = await cms.auth.query(selectUnconfirmedUsersQuery);
		// if none then return error "this url does not exist"
		if(typeof unconfirmedUser !== "object") {
			throw new Error("Required <confirmation_token> to exist on <confirm> [ERR:5233]");
		}
		// otherwise:
		// pick data of unconfirmed_user
		const recovery_token = cms.utils.generateToken(200);
		// insert one user with picked data
		const insertUserQuery = cms.auth.queries.insertUser({
			parameters: {
				name: unconfirmedUser.name,
				password: unconfirmedUser.password,
				email: unconfirmedUser.email,
				full_name: unconfirmedUser.full_name,
				recovery_token: recovery_token,
			}
		});
		const insertUserResult = await cms.auth.query(insertUserQuery);
		return { id: insertUserResult.insertId, recovery_token };
	} catch (error) {
		throw error;
	}
};