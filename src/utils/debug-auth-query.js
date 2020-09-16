module.exports = function(query) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	if(cms.schema.general.debugSqlAuth === true) {
		console.log(cms.schema.general.debugSqlAuthSplitter, query, cms.schema.general.debugSqlAuthSplitter.replace("[", "[/"));
	}
}