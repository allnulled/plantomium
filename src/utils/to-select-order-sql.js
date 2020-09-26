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
	if(typeof sort === "string") {
		const parts = splitToOrder(sort);
		return parts.length ? parts : false;
	} else if(Array.isArray(sort) && sort.length) {
		return sort;
	} else if(Array.isArray(sort)) {
		return false;
	} else if(typeof sort === "undefined") {
		return false;
	} else {
		throw new Error("Required <sort> to be a string or array on <toSelectOrderSql> [ERR:643]");
	}
	if(typeof tablename !== "undefined") {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const sortStatement = cms.utils.dataGetter(cms, ["schema", "constraints", tablename, "rest", "order"], undefined);
		return splitToOrder(sortStatement);
	}
	throw new Error("Required <sort> or <tablename> on <toSelectOrderSql> [ERR:029]");
}