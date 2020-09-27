const fs = require("fs");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(argv) {
	let connection = undefined;
	try {
		cms.utils.trace("cms remove user");
		const args = require("yargs-parser")(argv);
		if(!("name" in args)) {
			throw new Error("Required <name> on <cms remove user> [ERR:8055]");
		}
		cms.utils.hasOnlyKeys(args, ["_", "name", "from-group", "from-permission", "fromGroup", "fromPermission"]);
		cms.deploy.loadAuth(cms);
		const allData = [];
		const isFromGroup = "fromGroup" in args;
		const isFromPermission = "fromPermission" in args;
		if(isFromGroup) {
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT users.id
				FROM users
				WHERE users.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT groups.id
				FROM groups
				WHERE groups.name = ${sqlString.escape(args.fromGroup)};
			`, asynchandler(ok, fail)));
			if(!id_user) {
				throw new Error("Required <name> of user to exist on <cms remove user> [ERR:1978]");
			}
			if(!id_group) {
				throw new Error("Required <fromGroup> to exist on <cms remove user> [ERR:2050]");
			}
			const query = cms.utils.renderDeleteFrom("combo_user_and_group", { id_user, id_group }, ["id_user", "id_group"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		if(isFromPermission) {
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT users.id
				FROM users
				WHERE users.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT permissions.id
				FROM permissions
				WHERE permissions.name = ${sqlString.escape(args.fromPermission)};
			`, asynchandler(ok, fail)));
			if(!id_user) {
				throw new Error("Required <name> of user to exist on <cms remove user> [ERR:1992]");
			}
			if(!id_permission) {
				throw new Error("Required <fromPermission> to exist on <cms remove user> [ERR:9550]");
			}
			const query = cms.utils.renderDeleteFrom("combo_user_and_permission", { id_user, id_permission }, ["id_user", "id_permission"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		if((!isFromGroup) && (!isFromPermission)) {
			const query = cms.utils.renderDeleteFrom("users", Object.assign({}, args, { name: args.name }), ["name"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)));
			allData.push(data);
		}
		cms.utils.printSqlData(data, true);
		cms.deploy.stopServer(cms);
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}