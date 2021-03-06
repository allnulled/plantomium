const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-insert-fields-sql.js`
 * 
 * @name `toInsertFieldsSql`
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
module.exports = function(authenticationParam, insertFields = [], tablename = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toInsertFieldsSql");
	let sql = "";
	for(let index=0; index < insertFields.length; index++) {
		const field = insertFields[index];
		sql += ((index !== 0) ? "," : "") + "\n  " + sqlString.escapeId(field);
	}
	return sql;
}