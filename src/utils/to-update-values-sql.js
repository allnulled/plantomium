const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-update-values-sql.js`
 * 
 * @name `toUpdateValuesSql`
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
module.exports = function(authenticationParam, updateValues = {}, table = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toUpdateValuesSql");
	const authentication = cms.utils.formatAuthenticationParameter(authenticationParam);
	let sql = "";
	// @TODO:
	const keys = Object.keys(updateValues);
	let isStarted = false;
	for(let index=0; index < keys.length; index++) {
		const key = keys[index];
		const value = updateValues[key];
		const isEnabled = cms.utils.checkRestPermissionsTo(authentication, "put", table, key);
		if(isEnabled) {
			if(!isStarted) {
				isStarted = true;
			} else {
				sql += ", ";
			}
			sql += `\n  ${sqlString.escapeId(key)} = ${sqlString.escape(value)}`;
		}
	}
	return sql;
}