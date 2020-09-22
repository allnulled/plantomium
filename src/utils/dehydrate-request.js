module.exports = function(request = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    cms.utils.trace("cms.utils.dehydrateRequest");
	return {
		headers: request.headers,
		query: request.query,
		params: request.params,
		body: request.body,
	};
}