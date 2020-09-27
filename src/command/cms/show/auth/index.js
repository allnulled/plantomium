const fs = require("fs");
const ejs = require("ejs");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		cms.utils.trace("cms show auth");
		const args = require("yargs-parser")(argv);
		const {
			where = [],
				permissions: showPermissions = false,
				groups: showGroups = false,
				users: showUsers = false,
				permission = false,
				group = false,
				user = false,
				fromUser = false,
				fromGroup = false,
				fromPermission = false,
				showResults = false,
				showQuery = false,
		} = args;
		cms.utils.hasOnlyKeys(args, [
			"_",
			"permissions",
			"permission",
			"groups",
			"group",
			"users",
			"user",
			"fromUser",
			"from-user",
			"fromGroup",
			"from-group",
			"fromPermission",
			"from-permission",
			"show-query",
			"showQuery",
			"show-results",
			"showResults",
			"where"
		]);
		cms.deploy.loadHigherApi(cms);
		// ------- Format froms:
		let fromUserItems = [],
			fromGroupItems = [],
			fromPermissionItems = [];
		if (typeof fromUser === "string") {
			fromUserItems.push(fromUser);
		} else if (Array.isArray(fromUser)) {
			fromUserItems = fromUser;
		}
		if (typeof fromGroup === "string") {
			fromGroupItems.push(fromGroup);
		} else if (Array.isArray(fromGroup)) {
			fromGroupItems = fromGroup;
		}
		if (typeof fromUser === "string") {
			fromUserItems.push(fromUser);
		} else if (Array.isArray(fromUser)) {
			fromUserItems = fromUser;
		}

		// ------- Add wheres:
		if (fromUserItems.length) {
			where.push(["users.name", "in", fromUserItems]);
		}
		if (fromGroupItems.length) {
			where.push(["groups.name", "in", fromGroupItems]);
		}
		if(fromUserItems.length && fromGroupItems.length) {
			throw new Error("Required to use <fromUser> or <fromGroup> but not both on <cms show auth> [ERR:248]");
		}
/*
select *
from users
left join combo_user_and_group
  on combo_user_and_group.id_user = users.id
left join combo_user_and_permission
  on combo_user_and_permission.id_user = users.id
left join combo_group_and_permission
  on combo_group_and_permission.id_group = combo_user_and_group.id_group
left join groups
  on combo_group_and_permission.id_group = groups.id
left join permissions
  on permissions.id in (combo_group_and_permission.id_permission, combo_user_and_permission.id_permission)
where users.name = 'user5'
//*/
		// ------- Compose query:
		let query = undefined;
		if(fromUserItems.length) {
			query = await cms.utils.renderSelectFrom({
				table: ["users", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "permissions", "groups"],
				join: [
					["combo_user_and_group", "combo_user_and_group.id_user", "=", "users.id"],
					["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "users.id"],
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "combo_user_and_group.id_group"],
					["permissions", "permissions.id", "in", [{ ref: "combo_user_and_permission.id_permission" }, { ref: "combo_group_and_permission.id_permission" }]],
					["groups", "groups.id", "=", "combo_user_and_group.id_group"],
				],
				where
			});
		} else if(fromGroupItems.length) {
			query = await cms.utils.renderSelectFrom({
				table: ["groups", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "permissions", "users"],
				join: [
					["combo_user_and_group", "combo_user_and_group.id_group", "=", "groups.id"],
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
					["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "combo_user_and_group.id_user"],
					["permissions", "permissions.id", "=", "combo_group_and_permission.id_permission"],
					["users", "users.id", "=", "combo_user_and_group.id_user"],
				],
				where
			});
		} else {
			query = await cms.utils.renderSelectFrom({
				table: ["permissions", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "groups", "users"],
				join: [
					["combo_group_and_permission", "combo_group_and_permission.id_permission", "=", "permissions.id"],
					["combo_user_and_permission", "combo_user_and_permission.id_permission", "=", "permissions.id"],
					["groups", "groups.id", "=", "combo_group_and_permission.id_group"],
					["users", "users.id", "=", "combo_user_and_permission.id_user"],
				],
				where
			});
		}
		if (showQuery === true) {
			console.log("[SQL]" + query + "\n[/SQL]");
		}
		const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
		if (showResults) {
			console.log("[Results:]");
			cms.utils.printSqlData(data, true);
		}
		const users = cms.utils.toObjectSql(data, "users", "id");
		const groups = cms.utils.toObjectSql(data, "groups", "id");
		const permissions = cms.utils.toObjectSql(data, "permissions", "id");
		const showAll = (!showUsers) && (!showPermissions) && (!showGroups);
		if (showUsers || showAll) {
			console.log("[Users:] " + ((users.length === 0) ? "none" : users.length));
			if (users.length) {
				cms.utils.printSqlData(users, true);
			}
		}
		if (showGroups || showAll) {
			console.log("[Groups:] " + ((groups.length === 0) ? "none" : groups.length));
			if (groups.length) {
				cms.utils.printSqlData(groups, true);
			}
		}
		if (showPermissions || showAll) {
			console.log("[Permissions:] " + ((permissions.length === 0) ? "none" : permissions.length));
			if (permissions.length) {
				cms.utils.printSqlData(permissions, true);
			}
		}
		cms.deploy.stopServer(cms);
	} catch (error) {
		console.error(error);
		cms.deploy.stopServer(cms);
	}
}