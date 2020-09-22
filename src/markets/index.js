
module.exports = {
	getMarkets: () => {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.markets.getMarkets");
		const importFresh = require("import-fresh");
		return importFresh(process.env.PROJECT_ROOT + "/src/config/markets.json")
	}
};