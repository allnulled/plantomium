module.exports = require(process.env.PROJECT_ROOT + "/src/process/base/process.js").create({
	directory: __dirname,
	table: "example_process",
	transactionTable: "example_process_transaction",
	transactionColumnRef: "id_process",
});