const Controller = require(__dirname + "/../controller.js");

class TraitBaseController extends Controller {
	
	static get Table() {
		return "trait";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/trait.js")
	}

}

module.exports = TraitBaseController;