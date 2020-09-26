const Controller = require(__dirname + "/../controller.js");

class TesteandoBaseController extends Controller {
	
	static get Table() {
		return "testeando";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/testeando.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/testeando.js")
	}

}

module.exports = TesteandoBaseController;