/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/register.js`
 * 
 * @name `register`
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
		// @TODO: 1. select all users and unconfirmed_users that has same name or email (q. select-all-users-by-name-or-email)
		cms.utils.trace("cms.auth.actors.register");
		const selectUsersQuery = cms.auth.queries.selectAllUsersByNameOrEmail({ parameters });
		const [user] = await cms.auth.query(selectUsersQuery);
		// @TODO: 2. if someone found:
		if(typeof user !== "undefined") {
			throw new Error("Required provided <name> and <email> of a <user> or an <unconfirmed_user> to not exist on <register>");
		}
		// @TODO: 3. insert one unconfirmed_user with name, full_name, password, email, confirmation_token (q. insert-unconfirmed-user)
		parameters.password = await cms.utils.encryptPassword(parameters.password);
		parameters.confirmation_token = cms.utils.generateToken(200);
		const insertUnuserQuery = cms.auth.queries.insertUnconfirmedUser({ parameters });
		const insertUnuserResponse = await cms.auth.query(insertUnuserQuery);
		// @TODO: 4. send email with confirmation link
		await cms.email.agents.administrator.create().send({
			parameters: {
				from: "carlosjimenohernandez@gmail.com",
				to: "carlosjimenohernandez@gmail.com",
				subject: "Email de bienvenida",
				text: "¡Eso es, bebé! ¡Aquí tienes tu email de bienvenida!"
			}
		});
		// @TODO: 5. return success the generated confirmation_token
		return {
			id: insertUnuserResponse.insertId,
			confirmation_token: parameters.confirmation_token
		};
	} catch (error) {
		throw error;
	}
};