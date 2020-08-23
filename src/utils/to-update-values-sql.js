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
module.exports = function(updateValues = {}) {
	let sql = "";
	// @TODO:
	const keys = Object.keys(updateValues);
	for(let index=0; index < keys.length; index++) {
		const key = keys[index];
		const value = updateValues[key];
		if(index !== 0) {
			", "
		}
		sql += `\n  ${sqlString.escapeId(key)} = ${sqlString.escape(value)}`;
	}
	return sql;
}