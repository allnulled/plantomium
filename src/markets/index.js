module.exports = {
	getMarkets: () => {
		const importFresh = require("import-fresh");
		return importFresh(process.env.PROJECT_ROOT + "/src/config/markets.json")
	}
};