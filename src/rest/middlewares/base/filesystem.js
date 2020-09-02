const Middleware = require(__dirname + "/../middleware.js");

class FilesystemBaseMiddleware extends Middleware {
	
	static get Table() {
		return "filesystem";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/filesystem.js")
	}

}

module.exports = FilesystemBaseMiddleware;