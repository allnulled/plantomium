const Middleware = require(__dirname + "/../middleware.js");

class TraitSecretDetailsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "trait_secret_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait-secret-details.js")
	}

}

module.exports = TraitSecretDetailsBaseMiddleware;