const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/converse/:id"],
	methods: ["post"],
	middlewares: [cms.rest.middlewares.postify],
	controller: function(request, response, next) {
		const currentProcess = request.fw.data.process;
		// update
		// + update transaction
		response.json({ msg: "ok" });
	}
}