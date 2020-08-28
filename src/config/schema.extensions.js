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
				policy: {
					where: undefined, // default: 	""
					join: undefined, // default: 	""
					limit: undefined, // default: 	""
					offset: undefined, // default: 	""
					sort: undefined, // default: 	""
				},
				recursiveSelect: {},
				cascadeDelete: []
			}
		},
		groups: {
			rest: {
				join: [
					["combo_group_and_permission", "combo_group_and_permission.id_group", "=", "groups.id"],
					["permissions", "permissions.id", "=", "combo_group_and_permission.id_permission"]
				], // default: 	[]
				/*
				formatBy: [
					["groups", "id"], 
					["permissions", "id"]
				]
				//*/
			}
		}
	},
	general: {
		general: {
			slug: "/api/v1",
			slugForAuth: "/auth/v1",
			debugSql: process.env.DEBUG_SQL === "true",
			debugErrors: process.env.DEBUG_ERRORS === "true",
			debugTraces: process.env.DEBUG_TRACES === "true",
			maxSessionsPerUser: 10,
			hiddenTables: [
				"sessions",
				//"users",
				"unconfirmed_users",
				// "groups",
				//"permissions",
				"combo_user_and_group",
				"combo_user_and_permission",
				// "combo_group_and_permission",
			],
			hiddenColumns: [
				"users.password",
				"users.recovery_token",
				"users.email",
				"users.deactivation",
			]
		},
	}
}