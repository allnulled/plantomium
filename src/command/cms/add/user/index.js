const fs = require("fs");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(argv) {
	let connection = undefined;
	try {
		cms.utils.trace("cms add user");
		const args = require("yargs-parser")(argv);
		if(!("name" in args)) {
			throw new Error("Required <name> on <cms add user> [ERR:855]");
		}
		cms.deploy.loadAuth(cms);
		let data = undefined;
		if("toGroup" in args) {
			// @TODO...
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT users.id
				FROM users
				WHERE users.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT groups.id
				FROM groups
				WHERE groups.name = ${sqlString.escape(args.toGroup)};
			`, asynchandler(ok, fail)));
			if(!id_user) {
				throw new Error("Required <name> of user to exist on <cms add user> [ERR:1778]");
			}
			if(!id_group) {
				throw new Error("Required <toGroup> to exist on <cms add user> [ERR:2850]");
			}
			const query = cms.utils.renderInsertInto("combo_user_and_group", { id_user, id_group }, ["id_user", "id_group"]);
			data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)))
		} else {
			if(!("password" in args)) {
				throw new Error("Required <password> on <cms add user> [ERR:985]");
			}
			if(!("email" in args)) {
				throw new Error("Required <email> on <cms add user> [ERR:575]");
			}
			if(!("full_name" in args)) {
				throw new Error("Required <full_name> on <cms add user> [ERR:7955]");
			}
			const newPassword = await cms.utils.encryptPassword(args.password);
			const query = cms.utils.renderInsertInto("users", Object.assign({}, args, {
				password: newPassword
			}), ["name", "password", "email", "full_name", "description"]);
			data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)))
		}
		cms.utils.printSqlData(data, true);
		cms.deploy.stopServer(cms);
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}