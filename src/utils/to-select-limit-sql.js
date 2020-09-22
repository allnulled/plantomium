const sqlString = require("sqlstring");

/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-limit-sql.js`
 * 
 * @name `toSelectLimitSql`
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
module.exports = function(selectLimit = 20, table = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toSelectLimitSql");
	if(typeof table === "string") {
		if(!(table in cms.schema.constraints)) {
			throw new Error("Required <table> to exist in cms.schema.constraints on toSelectLimitSql [ERR:026]");
		}
		return cms.utils.dataGetter(cms, ["schema", "constraints", table, "rest", "limit"], selectLimit);
	}
	return sqlString.escape(selectLimit);
}