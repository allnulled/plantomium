const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/view/:id"],
	methods: ["get"],
	middlewares: [cms.auth.middlewares.onlyAuthenticated(), cms.rest.middlewares.postify],
	// (or factory)
	controller: async function(request, response, next) {
		try {
			return cms.utils.successfulJsonResponse(request.fw.process, request, response, next);
		} catch(error) {
			return cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	},
}