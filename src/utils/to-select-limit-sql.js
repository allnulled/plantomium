const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-limit-sql.js`
 * 
 * @name `toSelectLimitSql`
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
module.exports = function(selectLimit = 20) {
	return sqlString.escape(selectLimit);
}