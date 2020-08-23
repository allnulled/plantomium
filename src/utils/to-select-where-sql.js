const sqlString = require("sqlstring");
const ENABLED_OPS = ["=", ">", ">=", "<", "<=", "!=", "in", "!in"];

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-where-sql.js`
 * 
 * @name `toSelectWhereSql`
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
module.exports = function(selectWhere, prependAnd = false) {
	let sql = "";
	if(typeof selectWhere === "undefined") {
		return "";
	}
	if(typeof selectWhere === "string") {
		selectWhere = JSON.parse(selectWhere);
	}
	if((!Array.isArray(selectWhere)) && typeof selectWhere === "object") {
		selectWhere = [].concat(selectWhere);
	}
	if(!Array.isArray(selectWhere)) {
		throw new Error("Every <selectWhere> expression must be an array [ERR:001]");
	}
	for(let index=0; index < selectWhere.length; index++) {
		const rule = selectWhere[index];
		if(!Array.isArray(rule)) {
			throw new Error("Every <selectWhere> rule must be an array [ERR:002]");
		}
		if(rule.length !== 3) {
			throw new Error("Every <selectWhere> rule must be an array (of 3 items) [ERR:003]");
		}
		const [ op1, op, op2 ] = rule;
		if(index !== 0 || prependAnd === true) {
			sql += "\n  AND";
		}
		if(ENABLED_OPS.indexOf(op) === -1) {
			throw new Error("Not allowed operation with <" + op + "> [ERR:004]");
		}
		// @TODO: ALLOW IN+!IN OPERATIONS WITH ARRAYS AS 3RD ARGUMENT
		// @TODO: ALLOW PROP2PROP OPERATION WITH ARRAYS OF 2 ITEMS AS 3RD ARGUMENT
		sql += ` ${sqlString.escapeId(op1)} ${op} ${sqlString.escape(op2)}`;
	}
	return sql;
}