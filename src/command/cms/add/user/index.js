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
		cms.utils.hasOnlyKeys(args, ["_", "name", "to-group", "to-permission", "toGroup", "toPermission", "password", "email", "full_name"]);
		cms.deploy.loadAuth(cms);
		const allData = [];
		const isToGroup = "toGroup" in args;
		const isToPermission = "toPermission" in args;
		if(isToGroup) {
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
				throw new Error("Required <name> of user to exist on <cms add user> [ERR:1958]");
			}
			if(!id_group) {
				throw new Error("Required <toGroup> to exist on <cms add user> [ERR:2850]");
			}
			const query = cms.utils.renderInsertInto("combo_user_and_group", { id_user, id_group }, ["id_user", "id_group"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		if(isToPermission) {
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT users.id
				FROM users
				WHERE users.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT permissions.id
				FROM permissions
				WHERE permissions.name = ${sqlString.escape(args.toPermission)};
			`, asynchandler(ok, fail)));
			if(!id_user) {
				throw new Error("Required <name> of user to exist on <cms add user> [ERR:1142]");
			}
			if(!id_permission) {
				throw new Error("Required <toPermission> to exist on <cms add user> [ERR:2350]");
			}
			const query = cms.utils.renderInsertInto("combo_user_and_permission", { id_user, id_permission }, ["id_user", "id_permission"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		if((!isToGroup) && (!isToPermission)) {
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
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		for(let index=0; index < allData.length; index++) {
			const data = allData[index];
			cms.utils.printSqlData(data, true);
		}
		cms.deploy.stopServer(cms);
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}