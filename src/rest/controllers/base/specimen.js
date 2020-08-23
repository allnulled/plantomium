const Controller = require(__dirname + "/../controller.js");

class SpecimenBaseController extends Controller {
	
	static get Table() {
		return "specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/specimen.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/specimen.js")
	}

}

module.exports = SpecimenBaseController;