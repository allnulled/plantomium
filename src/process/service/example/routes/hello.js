const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/hello"],
	methods: ["post"],
	middlewares: [cms.rest.middlewares.postify],
	noProcessQuery: true,
	// (or factory)
	controller: function(request, response, next) {
		// insert
		// + insert transaction
		response.json({ msg: "ok" });
	},
}