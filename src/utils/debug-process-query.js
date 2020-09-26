module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.debugProcessQuery");
	if(process.env.DEBUG_SQL_PROCESS === "true") {
		console.log(cms.schema.general.debugSqlProcessSplitter, query, cms.schema.general.debugSqlProcessSplitter.replace("[", "[/"));
	}
}