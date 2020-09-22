module.exports = function(router) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.printRoutes");
	const fs = require("fs");
	const Table = require("cli-table3");
	const clitable = new Table({
		style: { head: [], border: []},
		head: ["nº", "method", "route"],
	});
	router.stack
		.filter(r => r.route)
		.forEach((r, index) => {
			const methods = Object.keys(r.route.methods).join(", ").toUpperCase();
			const route = r.route.path;
			clitable.push([index, methods, route]);
		});
	const tableString = clitable.toString();
	console.log(tableString);
	fs.writeFileSync(process.env.PROJECT_ROOT + "/tree.routes.txt", tableString, "utf8")
}