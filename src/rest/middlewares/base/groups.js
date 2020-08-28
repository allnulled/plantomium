const Middleware = require(__dirname + "/../middleware.js");

class GroupsBaseMiddleware extends Middleware {
	
	static get Table() {
		return "groups";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/groups.js")
	}

}

module.exports = GroupsBaseMiddleware;