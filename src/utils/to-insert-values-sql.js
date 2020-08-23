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
module.exports = function(insertValues = []) {
	let sql = "";
	for(let index=0; index < insertValues.length; index++) {
		const value = insertValues[index];
		sql += ((index !== 0) ? "," : "") + "\n  " + sqlString.escape(value);
	}
	return sql;
}