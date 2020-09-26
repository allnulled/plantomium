const markets = require(process.env.PROJECT_ROOT + "/src/config/markets.json");
const Table = require("cli-table3");

if(typeof markets !== "object") {
	throw new Error("Required markets json file to be valid on <cms show markets> [ERR:339]");
}

console.log();
const matketsTableContents = Object.keys(markets).map(marketName => {
	const market = markets[marketName];
	const table = new Table();
	const plugins = Object.keys(market);
	const pluginsTable = table
		.concat([["", marketName]])
		.concat(plugins.map((name, index) => {
			const {plugin: completeName} = market[name];
			return [index+1, completeName];
		}));
	const pluginsReport = pluginsTable.toString();
	console.log(pluginsReport);
});
console.log();