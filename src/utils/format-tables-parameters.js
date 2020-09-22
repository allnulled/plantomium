module.exports = function(tablesParam) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.formatTablesParameters");
	return typeof tablesParam === "string" ? [tablesParam] : tablesParam;
};