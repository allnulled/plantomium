const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/confirm.js`
 * 
 * @location `cms.auth.actors.confirm`
 * @name confirm
 * @type `async function`
 * @receives
 * @receives - `parameters:Object` - parameters to confirm an unconfirmed_user.
 * @receives - `parameters.confirmation_token:String` - confirmation_token of the unconfirmed_user.
 * @returns
 * @returns - `Promise<data:Object>`
 * @returns - `Promise<data.id:Integer>`
 * @returns - `Promise<data.recovery_token:String>`
 * @throws
 * @throws - `No unconfirmed_user found by confirmation_token on confirm` - select returned 0 items
 * @description method that confirms an unconfirmed_user as user
 * 
 * 
 */
module.exports = async function(parameters = {}) {
	try {
		// select all unconfirmed_users that: has same confirmation_token
		const selectUnconfirmedUsersQuery = cms.auth.queries.selectUnconfirmedUsersByConfirmationToken({ parameters });
		const [unconfirmedUser] = await cms.auth.query(selectUnconfirmedUsersQuery);
		// if none then return error "this url does not exist"
		if(typeof unconfirmedUser !== "object") {
			throw new Error("No unconfirmed_user found by confirmation_token on confirm");
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