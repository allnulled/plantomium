module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	if(cms.schema.general.debugSqlHistory === true) {
		console.log(cms.schema.general.debugSqlHistorySplitter, query, cms.schema.general.debugSqlHistorySplitter.replace("[", "[/"));
	}
}