const fs = require("fs");
const ejs = require("ejs");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		cms.utils.trace("cms show users");
		const args = require("yargs-parser")(argv);
		const {
			where = [],
				ofGroup = undefined,
				withPermission = undefined
		} = args;
		cms.deploy.loadHigherApi(cms);
		let ofGroupItems = [], withPermissionItems = [];
		if(typeof ofGroup === "string") {
			ofGroupItems.push(ofGroup);
		} else if(Array.isArray(ofGroup)) {
			ofGroupItems = ofGroup;
		}
		if(typeof withPermission === "string") {
			withPermissionItems.push(withPermission);
		} else if(Array.isArray(withPermission)) {
			withPermissionItems = withPermission;
		}
		for(let index=0; index < ofGroupItems.length; index++) {
			const ofGroupItem = ofGroupItems[index];
			where.push(["groups.name", "=", ofGroupItem]);
		}
		for(let index=0; index < withPermissionItems.length; index++) {
			const withPermissionItem = withPermissionItems[index];
			where.push(["permissions.name", "=", withPermissionItem]);
		}
		const query = await cms.utils.renderSelectFrom({
			table: ["users", "combo_user_and_permission", "combo_user_and_group", "combo_group_and_permission", "groups", "permissions"],
			join: [
				["combo_user_and_group", "combo_user_and_group.id_user", "=", "users.id"],
				["groups", "groups.id", "=", "combo_user_and_group.id_group"],
				["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "users.id"],
				["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
				["permissions", "permissions.id", "in", [{ref:"combo_user_and_permission.id_permission"}, {ref:"combo_group_and_permission.id_permission"}]],
			],
			where
		});
		if (process.env.DEBUG_SQL === "true") {
			cms.utils.debug("[SQL] " + query)
		}
		const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
		const users = cms.utils.toObjectSql(data, "users", "id");
		const groups = cms.utils.toObjectSql(data, "groups", "id");
		const permissions = cms.utils.toObjectSql(data, "permissions", "id");
		console.log("[Users:] " + ((users.length === 0) ? "none" : users.length));
		if (users.length) cms.utils.printSqlData(users);
		console.log("[Groups:] " + ((groups.length === 0) ? "none" : groups.length));
		if (groups.length) cms.utils.printSqlData(groups);
		console.log("[Permissions:] " + ((permissions.length === 0) ? "none" : permissions.length));
		if (permissions.length) cms.utils.printSqlData(permissions);
		cms.deploy.stopServer(cms);
	} catch (error) {
		console.error(error);
		cms.deploy.stopServer(cms);
	}
}