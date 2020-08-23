/**
 * 
 * ----
 * 
 * ### `/src/auth/query.js`
 * 
 * @name `query`
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
module.exports = function(query, args, callback = undefined) {
	return new Promise(function(ok, fail) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js")
		if(cms.schema.general.debugSql) {
			console.log("\n\n[SQL:AUTH]_______________________________________________\n", query);
		}
		cms.auth.connection.query(query, args, function(error, result) {
			if(error) {
				fail(error);
			} else {
				ok(result);
			}
			if(typeof callback === "function") {
				callback(error, result)
			}
		});
	});
}