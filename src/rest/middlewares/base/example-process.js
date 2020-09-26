const Middleware = require(__dirname + "/../middleware.js");

class ExampleProcessBaseMiddleware extends Middleware {
	
	static get Table() {
		return "example_process";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/example-process.js")
	}

}

module.exports = ExampleProcessBaseMiddleware;