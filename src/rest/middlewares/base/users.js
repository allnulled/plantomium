const Middleware = require(__dirname + "/../middleware.js");

class UsersBaseMiddleware extends Middleware {
	
	static get Table() {
		return "users";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/users.js")
	}

}

module.exports = UsersBaseMiddleware;