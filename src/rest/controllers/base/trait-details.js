const Controller = require(__dirname + "/../controller.js");

class TraitDetailsBaseController extends Controller {
	
	static get Table() {
		return "trait_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait-details.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/trait-details.js")
	}

}

module.exports = TraitDetailsBaseController;