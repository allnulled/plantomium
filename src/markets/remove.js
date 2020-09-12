const fs = require("fs");
const importFresh = require("import-fresh");

module.exports = function(args) {

	if(typeof args === "undefined") {
		args = require("yargs-parser")(argv.join(" "));
	}
	const marketsPath = process.env.PROJECT_ROOT + "/src/config/markets.json";
	const hasUrl = typeof args.url === "string";
	const hasName = typeof args.name === "string";
	if((!hasUrl) && (!hasName)) {
		throw new Error("Required <url> or <name> parameter on <cms remove market> [ERR:996]");
	}
	const markets = importFresh(marketsPath);
	const marketNames = Object.keys(markets);
	let marketName = args.name;
	if(hasName) {
		if(!(args.name in markets)) {
			console.log(" ✓ Market seems to not exist, so...");
		} else {
			delete markets[args.name];
		}
	} else if(hasUrl) {
		const marketPosition = marketNames.map(name => markets[name].url).indexOf(args.url);
		if(marketPosition === -1) {
			throw new Error("Required <url> to be the url of an added market at <config/markets.json> on <cms remove market> [ERR:786]");
		}
		marketName = marketNames[marketPosition];
		delete markets[marketName];
	}
	fs.writeFileSync(marketsPath, JSON.stringify(markets, null, 2), "utf8");
	console.log(" ✓ Successfully removed!");
	
}