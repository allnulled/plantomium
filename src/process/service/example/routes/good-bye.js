const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const sqlString = require("sqlstring");

module.exports = {
	methods: ["post"],
	routes: ["/process/v1/example/good-bye/:id"],
	middlewares: [cms.auth.middlewares.onlyAuthenticated(), cms.rest.middlewares.postify],
	controller: async function(request, response, next) {
		try {
			cms.utils.trace("cms.process.service.example.routes.goodbye");
			const currentUser = cms.utils.dataGetter(request, ["fw","auth","user"], undefined);
			const currentProcess = cms.utils.dataGetter(request, ["fw","process"], undefined);
			const currentTable = cms.process.service.example.table;
			const currentTransactionTable = cms.process.service.example.transactionTable;
			const insertProcessTransaction = await cms.process.service.example.insertProcessTransaction({
				id_process: currentProcess.id,
				id_transactor: currentUser.id,
				operation: "good-bye",
				description: "...",
			});
			// @TODO: delete all transactions
			const transactions = await cms.process.service.example.selectProcessTransactions(currentProcess.id);
			const transactionIds = transactions.map(t => t["example_process_transaction.id"]);
			await cms.process.service.example.deleteProcessTransactions(transactionIds);
			// @TODO: improve iteration in parallel
			const user_agent = cms.utils.getAgentFromRequest(request);
			const user_ip = cms.utils.getIpFromRequest(request);
			for(let index=0; index < transactions.length; index++) {
				const transaction = transactions[index];
				await cms.history.actors.insertData({
					user_id: currentUser.id,
					user_agent,
					user_ip,
					original_table: "example_process_transactions",
					data: JSON.stringify(transaction),
					metadata: "{}",
					description: "Example process transaction",
				});
			}
			// @TODO: delete the process
			await cms.process.service.example.deleteProcess(currentProcess.id);
			await cms.history.actors.insertData({
				user_id: currentUser.id,
				user_agent,
				user_ip,
				original_table: "example_process_transactions",
				data: JSON.stringify(currentProcess),
				metadata: "{}",
				description: "Example process",
			});
			// @TODO: insert process in history
			return cms.utils.successfulJsonResponse({
				process: currentProcess.id,
				transaction: insertProcessTransaction.insertId,
			}, request, response, next);
		} catch(error) {
			return cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	},
}