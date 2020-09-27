const fs = require("fs");
const ejs = require("ejs");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		cms.utils.trace("cms show users");
		const args = require("yargs-parser")(argv);
		let {
			where = [],
				ofUser = undefined,
				ofPermission = undefined,
				showResults = false,
				showQuery = false,
		} = args;
		cms.utils.hasOnlyKeys(args, ["_", "name", "of-user", "of-permission", "ofUser", "ofPermission", "show-query", "showQuery", "show-results", "showResults", "where"]);
		cms.deploy.loadHigherApi(cms);
		let ofUserItems = [], ofPermissionItems = [];
		if(typeof ofUser === "string") {
			ofUserItems.push(ofUser);
		} else if(Array.isArray(ofUser)) {
			ofUserItems = ofUser;
		}
		if(typeof ofPermission === "string") {
			ofPermissionItems.push(ofPermission);
		} else if(Array.isArray(ofPermission)) {
			ofPermissionItems = ofPermission;
		}
		if(typeof where === "string") {
			try {
				where = JSON.parse(where);
			} catch(error) {
				throw new Error("Required <where> to be a jsonable string on <cms show groups> [ERR:4755]");
			}
		}
		if(!Array.isArray(where)) {
			throw new Error("Required <where> to be an array on <cms show groups> [ERR:5822]");
		}
		for(let index=0; index < ofUserItems.length; index++) {
			const ofUserItem = ofUserItems[index];
			where.push(["users.name", "=", ofUserItem]);
		}
		for(let index=0; index < ofPermissionItems.length; index++) {
			const ofPermissionItem = ofPermissionItems[index];
			where.push(["permissions.name", "=", ofPermissionItem]);
		}
		const query = await cms.utils.renderSelectFrom({
			table: ["groups", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "users", "permissions"],
			join: [
				["combo_user_and_group", "combo_user_and_group.id_group", "=", "groups.id"],
				["users", "combo_user_and_group.id_user", "=", "users.id"],
				["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
				["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "users.id"],
				["permissions", "permissions.id", "in", [{ref:"combo_user_and_permission.id_permission"}, {ref:"combo_group_and_permission.id_permission"}]],
			],
			where
		});
		if (showQuery === true) {
			console.log("[SQL]" + query + "\n[/SQL]");
		}
		const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
		if(showResults) {
			console.log("[Results:]");
			cms.utils.printSqlData(data, true);
		}
		const users = cms.utils.toObjectSql(data, "users", "id");
		const groups = cms.utils.toObjectSql(data, "groups", "id");
		const permissions = cms.utils.toObjectSql(data, "permissions", "id");
		console.log("[Users:] " + ((users.length === 0) ? "none" : users.length));
		if (users.length) cms.utils.printSqlData(users, true);
		console.log("[Groups:] " + ((groups.length === 0) ? "none" : groups.length));
		if (groups.length) cms.utils.printSqlData(groups, true);
		console.log("[Permissions:] " + ((permissions.length === 0) ? "none" : permissions.length));
		if (permissions.length) cms.utils.printSqlData(permissions, true);
		cms.deploy.stopServer(cms);
	} catch (error) {
		console.error(error);
		cms.deploy.stopServer(cms);
	}
}