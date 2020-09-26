module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.debugAuthQuery");
	if(process.env.DEBUG_SQL_AUTH === "true") {
		console.log(cms.schema.general.debugSqlAuthSplitter, query, cms.schema.general.debugSqlAuthSplitter.replace("[", "[/"));
	}
}