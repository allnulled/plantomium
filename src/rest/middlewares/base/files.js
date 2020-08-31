const Middleware = require(__dirname + "/../middleware.js");

class FilesBaseMiddleware extends Middleware {
	
	static get Table() {
		return "files";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/files.js")
	}

}

module.exports = FilesBaseMiddleware;