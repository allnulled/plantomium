const Middleware = require(__dirname + "/../middleware.js");

class TraitDetailsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "trait_details";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait-details.js")
	}

}

module.exports = TraitDetailsBaseMiddleware;