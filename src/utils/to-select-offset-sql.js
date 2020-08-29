const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-offset-sql.js`
 * 
 * @name `toSelectOffsetSql`
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
module.exports = function(limit = 20, page = 1, offset = undefined, tablename = undefined) {
	if(typeof offset !== "undefined") {
		return sqlString.escape(offset);
	}
	if(tablename) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const schemaOffset = cms.utils.dataGetter(cms, ["schema", "constraints", tablename, "rest", "offset"], undefined);
		if(typeof schemaOffset !== "undefined") {
			return sqlString.escape(schemaOffset);
		}
	}
	const result = limit * (page - 1);
	return sqlString.escape(result);
}