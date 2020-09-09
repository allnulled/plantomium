const Controller = require(__dirname + "/../controller.js");

class ExampleProcessTransactionBaseController extends Controller {
	
	static get Table() {
		return "example_process_transaction";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/example-process-transaction.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/example-process-transaction.js")
	}

}

module.exports = ExampleProcessTransactionBaseController;