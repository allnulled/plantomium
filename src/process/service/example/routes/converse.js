const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/converse/:id"],
	methods: ["post"],
	middlewares: [cms.auth.middlewares.onlyAuthenticated(), cms.rest.middlewares.postify],
	controller: async function(request, response, next) {
		try {
			cms.utils.trace("cms.process.service.example.routes.converse");
			const currentUser = cms.utils.dataGetter(request, ["fw", "auth", "user"], undefined);
			const currentProcess = cms.utils.dataGetter(request, ["fw", "process"], undefined);
			const updateProcess = await cms.process.service.example.updateProcess(currentProcess.id, {
				transactions: currentProcess.process.transactions + 1
			});
			const insertProcessTransaction = await cms.process.service.example.insertProcessTransaction({
				id_process: currentProcess.id,
				id_transactor: currentUser.id,
				operation: "converse",
				description: "...",
			})
			return cms.utils.successfulJsonResponse({
				process: currentProcess.id,
				transaction: insertProcessTransaction.insertId,
			}, request, response, next);
		} catch (error) {
			return cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	},
}