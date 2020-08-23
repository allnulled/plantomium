const Middleware = require(__dirname + "/../middleware.js");

class TraitBaseMiddleware extends Middleware {
	
	static get Table() {
		return "trait";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/trait.js")
	}

}

module.exports = TraitBaseMiddleware;