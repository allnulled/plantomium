const Controller = require(__dirname + "/../controller.js");

class FilesystemBaseController extends Controller {
	
	static get Table() {
		return "filesystem";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/filesystem.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/filesystem.js")
	}

}

module.exports = FilesystemBaseController;