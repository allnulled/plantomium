const Table = require("cli-table3");

module.exports = function(result, isExpand = false) {
	if (!Array.isArray(result)) {
		result = [].concat(result);
	}
	if (result.length === 0) {
		return console.log("No results found");
	}
	const headers = Object.keys(result[0]);
	const values = result.map(item => Object.values(item));
	const table = new Table({
		head: headers,
		colWidths: isExpand ? [] : headers.map(i => i === "id" ? 5 : 10),
		style: { head: [], border: []},
	});
	for(let index=0; index < values.length; index++) {
		const value = values[index];
		table.push(value)
	}
	console.log(table.toString());
}