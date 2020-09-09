const Middleware = require(__dirname + "/../middleware.js");

class ExampleProcessTransactionBaseMiddleware extends Middleware {
	
	static get Table() {
		return "example_process_transaction";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/example-process-transaction.js")
	}

}

module.exports = ExampleProcessTransactionBaseMiddleware;