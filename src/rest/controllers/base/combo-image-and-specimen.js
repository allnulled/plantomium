const Controller = require(__dirname + "/../controller.js");

class ComboImageAndSpecimenBaseController extends Controller {
	
	static get Table() {
		return "combo_image_and_specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-image-and-specimen.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-image-and-specimen.js")
	}

}

module.exports = ComboImageAndSpecimenBaseController;