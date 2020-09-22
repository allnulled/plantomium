module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.debugRestQuery");
	if(cms.schema.general.debugSql === true) {
		console.log(cms.schema.general.debugSqlRestSplitter, query, cms.schema.general.debugSqlRestSplitter.replace("[", "[/"));
	}
}