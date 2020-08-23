const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-fields-sql.js`
 * 
 * @name `toSelectFieldsSql`
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
module.exports = function(selectFields = [], defaultTable = undefined) {
	let sql = "";
	if(selectFields.length === 0) {
		return "*";
	}
	for(let index=0; index < selectFields.length; index++) {
		let field = selectFields[index];
		let alias = "";
		if(typeof field === "string") {
			field = [].concat(field);
		}
		if(index !== 0) {
			sql += ",\n    ";
		}
		if(field.length === 1) {
			if(defaultTable) {
				sql += sqlString.escapeId(defaultTable) + "." + sqlString.escapeId(field[0]);
				alias = defaultTable + "." + field[0];
			} else {
				sql += sqlString.escapeId(field[0]);
				alias = false;
			}
		} else if(selectFields.length === 2) {
			sql += sqlString.escapeId(field[0]) + "." + sqlString.escapeId(field[1]);
			alias = field[0] + "." + field[1];
		} else {
			throw new Error("Field format not supported to select fields SQL");
		}
		if(alias) {
			sql += " as '" + alias + "'";
		}
	}
	return sql;
}