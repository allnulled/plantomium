const fs = require("fs");
const ejs = require("ejs");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		cms.utils.trace("cms show permissions");
		const args = require("yargs-parser")(argv);
		const {
			where = [],
				ofUser = undefined,
				ofGroup = undefined
		} = args;
		cms.deploy.loadHigherApi(cms);
		let ofUserItems = [], ofGroupItems = [];
		if(typeof ofUser === "string") {
			ofUserItems.push(ofUser);
		} else if(Array.isArray(ofUser)) {
			ofUserItems = ofUser;
		}
		if(typeof ofGroup === "string") {
			ofGroupItems.push(ofGroup);
		} else if(Array.isArray(ofGroup)) {
			ofGroupItems = ofGroup;
		}
		for(let index=0; index < ofUserItems.length; index++) {
			const ofUserItem = ofUserItems[index];
			where.push(["users.name", "=", ofUserItem]);
		}
		for(let index=0; index < ofGroupItems.length; index++) {
			const ofGroupItem = ofGroupItems[index];
			where.push(["groups.name", "=", ofGroupItem]);
		}
		const query = await cms.utils.renderSelectFrom({
			table: ["permissions", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "users", "permissions", "groups"],
			join: [
				["combo_user_and_permission", "combo_user_and_permission.id_permission", "=", "permissions.id"],
				["combo_group_and_permission", "combo_group_and_permission.id_permission", "=", "permissions.id"],
				["users", "users.id", "=", "combo_user_and_permission.id_user"],
				["combo_user_and_group", "combo_user_and_group.id_group", "=", "combo_user_and_group.id_group"],
				["groups", "groups.id", "in", [{ref:"combo_group_and_permission.id_group"}, {ref:"combo_user_and_group.id_group"}]],
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