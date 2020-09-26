const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-join-sql.js`
 * 
 * @name `toSelectJoinSql`
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
module.exports = function(selectJoinParams = [], tablename = undefined, ignoreSchema = false) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toSelectJoinSql");
	let sql = "";
	if(!Array.isArray(selectJoinParams)) {
		throw new Error("Required <selectJoinParams> to be an array on toSelectJoinSql. [ERR:011]");
	}
	const joins = cms.utils.getSchemaJoinedTables(tablename, selectJoinParams, ignoreSchema);
	const joinKeys = Object.keys(joins);
	for(let indexJoins=0; indexJoins < joinKeys.length; indexJoins++) {
		const table = joinKeys[indexJoins];
		const joinRules = joins[table];
		for(let indexRules=0; indexRules < joinRules.length; indexRules++) {
			const joinRule = joinRules[indexRules];
			const [externalTable, externalColumn, operator, value] = joinRule;
			// @TODO: check if tables and columns exist.
			// @TODO: check if tables and columns have permissions enough.
			if(indexRules === 0) {
				sql += `  LEFT JOIN ${sqlString.escapeId(externalTable)}\n`;
			}
			const leftSide = sqlString.escapeId(externalColumn);
			if(!(operator in cms.utils.operationTranslations)) {
				throw new Error("Not recognized <operation> on toSelectJoinSql. [ERR:014]")
			}
			const middleSide = cms.utils.operationTranslations[operator].toUpperCase();
			let rightSide;
			if(typeof value === "string") {
				rightSide = sqlString.escapeId(value);
			} else if(((middleSide === "IN") || (middleSide === "NOT IN")) && Array.isArray(value)) {
				rightSide = "(" + value.map(item => cms.utils.toSafeSql(item)).join(", ") + ")";
			} else {
				throw new Error("Type not supported on toSelectJoinSql. [ERR:015]")
			}
			sql += `    ${indexRules === 0 ? "ON" : "AND"} ${leftSide} ${middleSide} ${rightSide}\n`;	
		}
	}
	return sql
}