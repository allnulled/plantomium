const Controller = require(__dirname + "/../controller.js");

class ExampleProcessBaseController extends Controller {
	
	static get Table() {
		return "example_process";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/example-process.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/example-process.js")
	}

}

module.exports = ExampleProcessBaseController;