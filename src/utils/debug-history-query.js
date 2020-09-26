module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.debugHistoryQuery");
    if(process.env.DEBUG_SQL_HISTORY === "true") {
		console.log(cms.schema.general.debugSqlHistorySplitter, query, cms.schema.general.debugSqlHistorySplitter.replace("[", "[/"));
	}
}