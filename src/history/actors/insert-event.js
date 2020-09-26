const ejs = require("ejs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = function(data, options = {}) {
	return new Promise(function(ok, fail) {
		const args = cms.utils.createParameters({ data });
		ejs.renderFile(process.env.PROJECT_ROOT + "/src/history/queries/insert-event.ejs", args, options, function(error, query) {
			if(error) {
				return fail(error);
			}
			cms.utils.debugHistoryQuery(query);
			cms.history.connection.query(query, function(error, output) {
				if(error) {
					return fail(error);
				}
				return ok(output);
			});
		});
	});
}