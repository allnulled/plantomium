/**
 * 
 * ----
 * 
 * ### `/src/utils/get-joined-tables.js`
 * 
 * @name `getSchemaJoinedTables`
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
module.exports = function(tablename, otherJoins = []) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const hasTablename = typeof tablename === "string";
	const joinsData = hasTablename ? cms.utils.dataGetter(cms, ["schema", "constraints", tablename, "rest", "join"], false) : [];
	const extendedJoins = joinsData ? joinsData : [];
	const selectJoin = [].concat(extendedJoins).concat(otherJoins);
	const joins = {};
	for(let indexJoins=0; indexJoins < selectJoin.length; indexJoins++) {
		const joinRule = selectJoin[indexJoins];
		if(!Array.isArray(joinRule)) {
			throw new Error("Required <selectJoin.*> to be arrays on toSelectJoinSql. [ERR:012]");
		}
		if(joinRule.length !== 4) {
			throw new Error("Required <selectJoin.*> to be arrays of 4 items on toSelectJoinSql. [ERR:013]");
		}
		const [table] = joinRule;
		if(table in joins) {
			joins[table].push(joinRule);
		} else {
			joins[table] = [joinRule];
		}
	}
	return joins;
}