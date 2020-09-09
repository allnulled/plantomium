const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/good-bye/:id"],
	methods: ["post"],
	middlewares: [cms.rest.middlewares.postify],
	controller: function(request, response, next) {
		const currentProcess = request.fw.data.process;
		// delete
		// + delete transactions
		response.json({ msg: "ok" });
	}
}