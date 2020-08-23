const Controller = require(__dirname + "/../controller.js");

class CompoundBaseController extends Controller {
	
	static get Table() {
		return "compound";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/compound.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/compound.js")
	}

}

module.exports = CompoundBaseController;