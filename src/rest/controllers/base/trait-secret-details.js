const Controller = require(__dirname + "/../controller.js");

class TraitSecretDetailsBaseController extends Controller {
	
	static get Table() {
		return "trait_secret_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait-secret-details.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/trait-secret-details.js")
	}

}

module.exports = TraitSecretDetailsBaseController;