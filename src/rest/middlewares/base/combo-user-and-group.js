const Middleware = require(__dirname + "/../middleware.js");

class ComboUserAndGroupBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_user_and_group";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-user-and-group.js")
	}

}

module.exports = ComboUserAndGroupBaseMiddleware;