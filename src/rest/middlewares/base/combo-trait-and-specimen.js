const Middleware = require(__dirname + "/../middleware.js");

class ComboTraitAndSpecimenBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_trait_and_specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-trait-and-specimen.js")
	}

}

module.exports = ComboTraitAndSpecimenBaseMiddleware;