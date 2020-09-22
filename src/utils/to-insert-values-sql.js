const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-insert-values-sql.js`
 * 
 * @name `toInsertValuesSql`
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
module.exports = function(authenticationParam, insertValues = [], insertFields = [], tablename = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toInsertValuesSql");
	let sql = "";
	for(let index=0; index < insertValues.length; index++) {
		const value = insertValues[index];
		sql += ((index !== 0) ? "," : "") + "\n  " + sqlString.escape(value);
	}
	return sql;
}