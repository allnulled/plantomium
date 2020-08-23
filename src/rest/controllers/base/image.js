const Controller = require(__dirname + "/../controller.js");

class ImageBaseController extends Controller {
	
	static get Table() {
		return "image";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/image.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/image.js")
	}

}

module.exports = ImageBaseController;