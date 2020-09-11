const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	routes: ["/process/v1/example/hello"],
	methods: ["post"],
	middlewares: [cms.auth.middlewares.onlyAuthenticated(), cms.rest.middlewares.postify],
	// (or factory)
	controller: async function(request, response, next) {
		try {
			const idUser = cms.utils.dataGetter(request, ["fw","auth","user","id"], undefined);
			const insertProcess = await cms.process.service.example.insertProcess({
				id_creator: idUser,
				data: JSON.stringify(request.body.data || {}),
				meta: "{}",
				status: "started"
			});
			const insertProcessTransaction = await cms.process.service.example.insertProcessTransaction({
				id_process: insertProcess.insertId,
				id_transactor: idUser,
				operation: "hello",
				description: "...",
			});
			return cms.utils.successfulJsonResponse({
				process: insertProcess.insertId,
				transaction: insertProcessTransaction.insertId,
			}, request, response, next);
		} catch(error) {
			return cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	},
}