const sqlString = require("sqlstring");

const splitToOrder = function(orderStatement) {
	const splits = (orderStatement || "").split(",");
	return splits.map(item => {
		const [field, sense="asc"] = item.trim().split(" ");
		if(field === "") {
			return "";
		}
		return sqlString.escapeId(field) + " " + sense;
	}).join(", ") || "";
}
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
module.exports = function(sort = undefined, tablename = undefined) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toSelectOrderSql");
	if(typeof sort !== "undefined") {
		return splitToOrder(sort);
	}
	if(typeof tablename !== "undefined") {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const sortStatement = cms.utils.dataGetter(cms, ["schema", "constraints", tablename, "rest", "order"], undefined);
		return splitToOrder(sortStatement);
	}
	throw new Error("Required <sort> or <tablename> on toSelectOrderSql [ERR:029]");
}