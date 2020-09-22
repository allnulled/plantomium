/**
 * 
 * ----
 * 
 * ### `/src/auth/actors/login.js`
 * 
 * @name `login`
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
		cms.utils.trace("cms.auth.actors.login");
		// select all sessions opened with same user and password
		const selectUsersQuery = cms.auth.queries.selectUserByNameOrEmail({ parameters });
		const users = await cms.auth.query(selectUsersQuery);
		// report errors:
		if(users.length === 0) {
			throw new Error("Required <user> to exist in database on <login> [ERR:5580]");
		}
		if(users.length !== 1) {
			throw new Error("Required <user> to exist once on <login> (anomaly) [ERR:5587] ");
		}
		// format user:
		const user = cms.utils.toObjectSql(users, "users")[0];
		if(typeof parameters.password !== "string") {
			throw new Error("Required <password> to be a string on <login> [ERR:5583]");
		}
		if(typeof user.password !== "string") {
			LL(users);
			throw new Error("Required <password> to be a string on <login> [ERR:5589]");
		}
		const isPassword = await cms.utils.comparePassword(parameters.password, user.password);
		if(isPassword === false) {
			LL(parameters.password, user.password);
			throw new Error("Required <password> to correspond to the user on <login> [ERR:5588]");
		}
		// select sessions for this user:
		const selectSessionsQuery = cms.auth.queries.selectSessionsByUser({ parameters: { id_user: user.id } });
		const sessions = await cms.auth.query(selectSessionsQuery);
		// check maximum number of opened sessions per user:
		if(sessions.length >= (cms.schema.general.maxSessionsPerUser || 5)) {
			throw new Error("Required <maxSessionsPerUser> not to be reached on <login> [ERR:5581]");
		}
		// generate tokens for session:
		const refresh_token = cms.utils.generateToken(200);
		const session_token = cms.utils.generateToken(200);
		parameters.refresh_token = refresh_token;
		parameters.session_token = session_token;
		// insert session by user:
		const insertSessionQuery = cms.auth.queries.insertSessionByUser({
			parameters: {
				id_user: user.id,
				refresh_token,
				session_token,
			}
		});
		const insertedSession = await cms.auth.query(insertSessionQuery);
		return {
			id: insertedSession.insertId,
			refresh_token,
			session_token,
		};
	} catch (error) {
		throw error;
	}
};