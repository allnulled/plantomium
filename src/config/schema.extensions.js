/**
 * 
 * ----
 * 
 * ### `/src/config/schema.extensions.js`
 * 
 * @name `schema.extensions`
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
module.exports = {
	perTable: {
		permissions: {
			rest: {
				where: [
					["permissions.name", "notlike", "%8"]
				], // default: 	[]
				limit: undefined, // default: 	""
				offset: undefined, // default: 	""
				sort: undefined, // default: 	[]
			}
		},
		groups: {
			rest: {
				join: [
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
					["permissions", "permissions.id", "=", "combo_group_and_permission.id_permission"]
				],
			},
		},
		combo_group_and_permission: {
			rest: {
				limit: 10,
				offset: 1,
				order: "combo_group_and_permission.id_group asc, combo_group_and_permission.id_permission asc"
			}
		},
		users: {
			rest: {
				cascadeDelete: [
					{
						type: "delete",
						// columnOrigin: "id",
						table: "combo_user_and_permission",
						column: "id_user",
					},//*
					{
						type: "delete",
						// columnOrigin: "id",
						table: "combo_user_and_group",
						column: "id_user",
					}
					//*/
				],
			}
		},
		filesystem: {
			rest: {
				tree: {
					pathColumn: "path",
					pathSeparator: "/", // default:
					typeColumn: "node_type", // default is: "node_type"
					leafAlias: "file", // default is: "leaf"
					branchAlias: "folder", // default is: "folder"
				}
			}
		}
	},
	general: {
		general: {
			slug: "/api/v1",
			slugForAuth: "/auth/v1",
			debugSql: process.env.DEBUG_SQL === "true" && true,
			debugSqlHistory: process.env.DEBUG_SQL_HISTORY === "true" && true,
			debugSqlAuth: process.env.DEBUG_SQL_AUTH === "true" && true,
			debugSqlProcess: process.env.DEBUG_SQL_PROCESS === "true" && true,
			debugErrors: process.env.DEBUG_ERRORS === "true" && true,
			debugTraces: process.env.DEBUG_TRACES === "true" && true,
			maxSessionsPerUser: 10,
			hiddenTables: [
				// "users",
				"unconfirmed_users",
				// "groups",
				// "permissions",
				// "combo_user_and_group",
				// "combo_user_and_permission",
				// "combo_group_and_permission",
			],
			hiddenColumns: [
				"users.password",
				"users.recovery_token",
				"users.email",
				"users.deactivation",
				"sessions.session_token"
			]
		},
	}
}