const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-order-sql.js`
 * 
 * @name `toSelectOrderSql`
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
module.exports = function(selectOrder = []) {
	let sql = sqlString.escapeId("id");
	
	return sql;
}