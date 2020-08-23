const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-offset-sql.js`
 * 
 * @name `toSelectOffsetSql`
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
module.exports = function(selectLimit = 20, selectPage = 1) {
	return "";
	const result = selectLimit * (selectPage - 1);
	return sqlString.escape(result);
}