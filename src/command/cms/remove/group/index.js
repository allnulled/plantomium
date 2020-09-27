const fs = require("fs");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(argv) {
	let connection = undefined;
	try {
		cms.utils.trace("cms remove group");
		const args = require("yargs-parser")(argv);
		if(!("name" in args)) {
			throw new Error("Required <name> on <cms remove group> [ERR:1755]");
		}
		if(typeof args.name !== "string") {
			throw new Error("Required <name> to be a srting on <cms remove group> [ERR:667]");
		}
		cms.deploy.loadAuth(cms);
		const allData = [];
		const isFromUser = "fromUser" in args;
		const isFromPermission = "fromPermission" in args;
		if(isFromUser) {
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT groups.id
				FROM groups
				WHERE groups.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT users.id
				FROM users
				WHERE users.name = ${sqlString.escape(args.fromUser)};
			`, asynchandler(ok, fail)));
			if(!id_user) {
				throw new Error("Required <id_user> to exist on <cms remove group> [ERR:7850]");
			}
			if(!id_group) {
				throw new Error("Required <id_group> to exist on <cms remove group> [ERR:1750]");
			}
			const query = cms.utils.renderDeleteFrom("combo_user_and_group", { id_user, id_group }, ["id_user", "id_group"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)))
			allData.push(data);
		}
		if(isFromPermission) {
			const [{id:id_group=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT groups.id
				FROM groups
				WHERE groups.name = ${sqlString.escape(args.name)};
			`, asynchandler(ok, fail)));
			const [{id:id_user=false}={}] = await new Promise((ok, fail) => cms.auth.connection.query(`
				SELECT permissions.id
				FROM permissions
				WHERE permissions.name = ${sqlString.escape(args.fromPermission)};
			`, asynchandler(ok, fail)));
			if(!id_permission) {
				throw new Error("Required <id_permission> to exist on <cms remove group> [ERR:1779]");
			}
			if(!id_group) {
				throw new Error("Required <id_group> to exist on <cms remove group> [ERR:7850]");
			}
			const query = cms.utils.renderDeleteFrom("combo_group_and_permission", { id_permission, id_group }, ["id_permission", "id_group"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)))
			allData.push(data);
		}
		if((!isFromPermission) && (!isFromUser)) {
			const query = cms.utils.renderDeleteFrom("groups", args, ["name", "description"]);
			const data = await new Promise((ok, fail) => cms.auth.connection.query(query, asynchandler(ok, fail)))
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