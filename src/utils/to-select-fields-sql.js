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
module.exports = function(selectFields = [], table = undefined) {
	let sql = "";
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const attrs = typeof table === "string" ? cms.utils.dataGetter(cms, ["schema", "constraints", table, "attributes"], undefined) : undefined;
	const hasNoFields = selectFields.length === 0;
	if(hasNoFields) {
		if(typeof table === "undefined") {
			return "*";
		} else if(table in cms.schema.constraints) {
			const fieldsSql = attrs.map(attr => sqlString.escapeId(`${table}.${attr}`) + ` as '${table}.${attr}'`).join(",\n  ");
			return fieldsSql;
		} else {
			throw new Error("Parameters <table> not found in schema. [ERR:009]");
		}
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
			if(table) {
				sql += sqlString.escapeId(table) + "." + sqlString.escapeId(field[0]);
				alias = table + "." + field[0];
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