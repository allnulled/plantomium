module.exports = function(field, tables = false) {
	const parts = field.split(".");
	const tableName = parts.length === 1 ? (( tables && tables.length !== 0 )? tables[0] : undefined) : parts[0];
	const columnName = parts.length === 1 ? parts[0] : parts[1];
	return {
		table: tableName, 
		column: columnName,
	};
}