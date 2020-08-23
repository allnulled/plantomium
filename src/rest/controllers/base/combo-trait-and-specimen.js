const Controller = require(__dirname + "/../controller.js");

class ComboTraitAndSpecimenBaseController extends Controller {
	
	static get Table() {
		return "combo_trait_and_specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-trait-and-specimen.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/combo-trait-and-specimen.js")
	}

}

module.exports = ComboTraitAndSpecimenBaseController;