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
				cascadeDelete: [{
						type: "delete",
						// columnOrigin: "id",
						table: "combo_user_and_permission",
						column: "id_user",
					}, //*
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
		},
		plant: {
			rest: {
				join: [
					["plant_details", "plant_details.id_plant", "=", "plant.id"]
				]
			}
		},
		trait: {
			rest: {
				join: [
					["trait_details", "trait_details.id_trait", "=", "trait.id"],
					["trait_secret_details", "trait_secret_details.id_trait", "=", "trait.id"],
				]
			}
		}
	},
	general: {
		general: {
			slug: "/api/v1",
			slugForAuth: "/auth/v1",
			debugSql: process.env.DEBUG_SQL === "true" && true,
			debugSqlRestSplitter: "\n[SQL:REST]",
			debugSqlHistory: process.env.DEBUG_SQL_HISTORY === "true" && true,
			debugSqlHistorySplitter: "\n[SQL:HISTORY]",
			debugSqlAuth: process.env.DEBUG_SQL_AUTH === "true" && true,
			debugSqlAuthSplitter: "\n[SQL:AUTH]",
			debugSqlProcess: process.env.DEBUG_SQL_PROCESS === "true" && true,
			debugSqlProcessSplitter: "\n[SQL:PROCESS]",
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
				// "sessions.session_token",
				// "sessions.refresh_token"
			]
		},
	}
}