const fs = require("fs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const marketPath = process.env.PROJECT_ROOT + "/src/config/markets.json";
const axios = require("axios");

module.exports = function(args = undefined) {
	if(typeof args === "undefined") {
		throw new Error("Required <args> to be an object on <cms add market> [ERR:679]");
	}
	if(typeof args.url !== "string") {
		throw new Error("Required <url> parameter on <cms add market> [ERR:992]");
	}
	console.log(" ✓ Downloading market manifest...");
	return axios.get(args.url).then(response => {
		console.log(" ✓ Successfully downloaded!");
		console.log(" ✓ Installing market...");
		const marketDataStr = fs.readFileSync(marketPath).toString();
		const marketData = JSON.parse(marketDataStr);
		const newMarketData = Object.assign({}, marketData, response.data);
		fs.writeFileSync(marketPath, JSON.stringify(newMarketData, null, 2), "utf8");
		console.log(" ✓ Successfully installed market(s):");
		Object.keys(response.data).forEach(marketName => console.log("   · " + marketName));
	}).catch(error => {
		throw error;
	});

};