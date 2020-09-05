const Middleware = require(__dirname + "/../middleware.js");

class TesteandoBaseMiddleware extends Middleware {
	
	static get Table() {
		return "testeando";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/testeando.js")
	}

}

module.exports = TesteandoBaseMiddleware;