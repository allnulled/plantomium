const path = require("path");
const importFresh = require("import-fresh");

module.exports = function(cms) {
	const outputPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_OUTPUT);
	cms.originalSchema = importFresh(outputPath);
};