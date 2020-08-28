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
	return selectOrder.map(item => sqlString.escapeId(item)).join(", ") || "";
}