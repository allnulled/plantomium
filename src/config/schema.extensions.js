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
	perTable: {},
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
				"users",
				"unconfirmed_users",
				"groups",
				//"permissions",
				"combo_user_and_group",
				"combo_user_and_permission",
				"combo_group_and_permission",
			],
			hiddenColumns: [
				//{ table: "permissions", column: "id" },
			]
		}
	}
}