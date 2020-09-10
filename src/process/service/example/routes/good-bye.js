const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const sqlString = require("sqlstring");

module.exports = {
	methods: ["post"],
	routes: ["/process/v1/example/good-bye/:id"],
	middlewares: [cms.auth.middlewares.onlyAuthenticated(), cms.rest.middlewares.postify],
	controller: async function(request, response, next) {
		try {
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
			const transactionIdsRepeated = currentProcess.transactions.map((transaction) => transaction[currentTransactionTable + ".id"]).concat(insertProcessTransaction.insertId);
			const transactionIds = cms.utils.arrayUnique(transactionIdsRepeated);
			await cms.process.service.example.deleteProcessTransactions(transactionIds);
			await cms.process.service.example.deleteProcess(currentProcess.id);
			// @TODO: insert transactions in history
			// @TODO: delete the process
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