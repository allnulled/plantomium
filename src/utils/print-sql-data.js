const Table = require("cli-table3");

module.exports = function(result) {
	let table = new Table();
	if(!Array.isArray(result)) {
		result = [].concat(result);
	}
	if(result.length === 0) {
		return console.log("No results found");
	}
	const headers = Object.keys(result[0]);
	table = table.concat(result.map(item => Object.values(item)));
	table.options.head = headers;
	table.options.colWidths = headers.map(i => i === "id" ? 5 : 10);
	console.log(table.toString());
}