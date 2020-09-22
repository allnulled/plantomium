module.exports = function(field, tables = false) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.formatTableColumn");
	const parts = field.split(".");
	const tableName = parts.length === 1 ? (( tables && tables.length !== 0 )? tables[0] : undefined) : parts[0];
	const columnName = parts.length === 1 ? parts[0] : parts[1];
	return {
		table: tableName, 
		column: columnName,
	};
}