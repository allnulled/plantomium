module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.debugProcessQuery");
	if(cms.schema.general.debugSqlProcess === true) {
		console.log(cms.schema.general.debugSqlProcessSplitter, query, cms.schema.general.debugSqlProcessSplitter.replace("[", "[/"));
	}
}