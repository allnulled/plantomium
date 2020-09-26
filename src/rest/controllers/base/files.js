const Controller = require(__dirname + "/../controller.js");

class FilesBaseController extends Controller {
	
	static get Table() {
		return "files";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/files.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/files.js")
	}

}

module.exports = FilesBaseController;