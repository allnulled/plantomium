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
				recursiveSelect: {},
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
						template: "delete", 
						table: "combo_user_and_permission",
						column: "combo_user_and_permission.id_user"
					},
					{
						template: "delete", 
						table: "combo_user_and_group",
						column: "combo_user_and_group.id_user"
					},
					{
						template: "update", 
						table: "combo_user_and_comment",
						column: "combo_user_and_comment.id_user",
						values: { id_user: null }
					}
				]
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