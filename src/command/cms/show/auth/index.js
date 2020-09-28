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
				fromUser = false,
				fromGroup = false,
				fromPermission = false,
				showResults = false,
				showQuery = false,
		} = args;
		cms.utils.hasOnlyKeys(args, [
			"_",
			"permissions",
			"groups",
			"users",
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
		let allData = [];
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
		if (fromUserItems.length && fromGroupItems.length) {
			throw new Error("Required to use <fromUser> or <fromGroup> but not both on <cms show auth> [ERR:248]");
		}
		// ------- Compose query:
		if (fromUserItems.length) {
			const query = await cms.utils.renderSelectFrom({
				table: ["users", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "permissions", "groups"],
				join: [
					["combo_user_and_group", "combo_user_and_group.id_user", "=", "users.id"],
					["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "users.id"],
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "combo_user_and_group.id_group"],
					["permissions", "permissions.id", "in", [{
						ref: "combo_user_and_permission.id_permission"
					}, {
						ref: "combo_group_and_permission.id_permission"
					}]],
					["groups", "groups.id", "=", "combo_user_and_group.id_group"],
				],
				limit: 0,
				where
			});
			if (showQuery === true) {
				console.log("[SQL]" + query + "\n[/SQL]");
			}
			const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
			allData = data;
		} else if (fromGroupItems.length) {
			const query = await cms.utils.renderSelectFrom({
				table: ["groups", "combo_user_and_group", "combo_group_and_permission", "combo_user_and_permission", "permissions", "users"],
				join: [
					["combo_user_and_group", "combo_user_and_group.id_group", "=", "groups.id"],
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
					["combo_user_and_permission", "combo_user_and_permission.id_user", "=", "combo_user_and_group.id_user"],
					["permissions", "permissions.id", "=", "combo_group_and_permission.id_permission"],
					["users", "users.id", "=", "combo_user_and_group.id_user"],
				],
				limit: 0,
				where
			});
			if (showQuery === true) {
				console.log("[SQL]" + query + "\n[/SQL]");
			}
			const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
			allData = data;
		} else {
			const tempHeaders = [];
			const tempData = [];
			const addTempHeaders = function(resultsData) {
				if(resultsData.length) {
					const rowData = resultsData[0];
					const headers = Object.keys(rowData);
					for(let index=0; index < headers.length; index++) {
						const item = headers[index];
						if(tempHeaders.indexOf(item) === -1) {
							tempHeaders.push(item);
						}
					}
				}
			}
			if (showUsers) {
				const query = await cms.utils.renderSelectFrom({
					table: ["users"],
					where,
					limit: 0,
				});
				if (showQuery === true) {
					console.log("[SQL]" + query + "\n[/SQL]");
				}
				const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
				tempData.push(data);
				addTempHeaders(data);
			}
			if (showGroups) {
				const query = await cms.utils.renderSelectFrom({
					table: ["groups"],
					where,
					limit: 0,
				});
				if (showQuery === true) {
					console.log("[SQL]" + query + "\n[/SQL]");
				}
				const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
				tempData.push(data);
				addTempHeaders(data);
			}
			if (showPermissions) {
				const query = await cms.utils.renderSelectFrom({
					table: ["permissions"],
					where,
					limit: 0,
				});
				if (showQuery === true) {
					console.log("[SQL]" + query + "\n[/SQL]");
				}
				const data = await new Promise((ok, fail) => cms.rest.connection.query(query, asynchandler(ok, fail)));
				tempData.push(data);
				addTempHeaders(data);
			}
			const emptyHeaders = tempHeaders.reduce(function(output, header) {
				output[header] = undefined;
				return output;
			}, {});
			for (let index = 0; index < tempData.length; index++) {
				const tempResults = tempData[index];
				for(let indexRow=0; indexRow < tempResults.length; indexRow++) {
					const tempRow = tempResults[indexRow];
					const row = Object.assign({}, tempRow, emptyHeaders, tempRow);
					allData.push(row);
				}
			}
		}
		if (showResults) {
			console.log("[Results:]");
			cms.utils.printSqlData(allData, true);
		}
		const users = cms.utils.toObjectSql(allData, "users", "id").filter(item => typeof item.id === "number");
		const groups = cms.utils.toObjectSql(allData, "groups", "id").filter(item => typeof item.id === "number");
		const permissions = cms.utils.toObjectSql(allData, "permissions", "id").filter(item => typeof item.id === "number");
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