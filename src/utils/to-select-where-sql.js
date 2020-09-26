const sqlString = require("sqlstring");
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
module.exports = function(authenticationParam, selectWhereParam, prependAnd = false, tablename = false, applyConstraints = true) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toSelectWhereSql");
	const authentication = cms.utils.formatAuthenticationParameter(authenticationParam);
	let sql = prependAnd === true ? " AND " : "";
	// 0. Do validations
	if(typeof selectWhereParam === "undefined") {
		selectWhereParam = [];
	}
	if(typeof selectWhereParam === "string") {
		selectWhereParam = JSON.parse(selectWhereParam);
	}
	if((!Array.isArray(selectWhereParam)) && typeof selectWhereParam === "object") {
		selectWhereParam = [].concat(selectWhereParam);
	}
	if(!Array.isArray(selectWhereParam)) {
		throw new Error("Every <selectWhere> expression must be an array [ERR:001]");
	}
	// 1. Check the "rest.where" property of vschema and add corresponding data:
	let selectWhere = [];
	let hasWhereExtensions = false;
	if((typeof tablename === "string") && (applyConstraints === true)) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const tableSchema = cms.schema.constraints[tablename];
		if((typeof tableSchema === "object") && (typeof tableSchema.rest === "object")) {
			const { where = [], wherePolicy = "appendable" } = tableSchema.rest;
			if(!Array.isArray(where)) {
				throw new Error("Extensions option <rest.where> must be an array [ERR:004]");
			}
			for(let index=0; index < where.length; index++) {
				if(index === 0) {
					hasWhereExtensions = true;
				}
				const whereRule = where[index];
				if(!Array.isArray(whereRule)) {
					throw new Error("Extensions option <rest.where.*> must be arrays too [ERR:005]");
				}
				if(whereRule.length < 3) {
					throw new Error("Extensions option <rest.where.*> must be arrays of at 3+ items [ERR:006]");
				}
				selectWhere.push(whereRule);
			}
		}
	}
	// 2. Mix the extensions and the parametric wheres:
	selectWhere = selectWhere.concat(selectWhereParam);
	// 3. Generate sql code from resultant where rules:
	for(let index=0; index < selectWhere.length; index++) {
		const rule = selectWhere[index];
		if(!Array.isArray(rule)) {
			throw new Error("Every <selectWhere> rule must be an array [ERR:002]");
		}
		if(rule.length < 3) {
			throw new Error("Every <selectWhere> rule must be an array (of 3 items) [ERR:003]");
		}
		const [ op1, opSymbol, op2 ] = rule;
		if(!(opSymbol in cms.utils.operationTranslations)) {
			throw new Error("Not allowed operation with <" + opSymbol + "> [ERR:004]");
		}
		// @TODO: ALLOW IN+!IN OPERATIONS WITH ARRAYS AS 3RD ARGUMENT
		// @TODO: ALLOW PROP2PROP OPERATION WITH ARRAYS OF 2 ITEMS AS 3RD ARGUMENT
		const op = cms.utils.operationTranslations[opSymbol];
		let op2Escaped = undefined;
		if(((op === "IN") || (op === "NOT IN")) && Array.isArray(op2)) {
			op2Escaped = "(" + op2.map(item => sqlString.escape(item)).join(", ") + ")";
		} else {
			op2Escaped = sqlString.escape(op2);
		}
		let isEnabled = false;
		if(authentication) {
			const { table, column } = cms.utils.formatTableColumn(op1, [tablename]);
			isEnabled = cms.utils.checkRestPermissionsTo(authentication, "get", table, column);
		} else {
			isEnabled = true;
		}
		if(isEnabled) {
			if(index !== 0) {
				sql += "\n  AND";
			}
			sql += ` ${sqlString.escapeId(op1)} ${op} ${op2Escaped}`;
		}
	}
	// 4. Return sql code
	return sql;
}