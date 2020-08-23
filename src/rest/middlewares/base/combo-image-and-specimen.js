const Middleware = require(__dirname + "/../middleware.js");

class ComboImageAndSpecimenBaseMiddleware extends Middleware {
	
	static get Table() {
		return "combo_image_and_specimen";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/combo-image-and-specimen.js")
	}

}

module.exports = ComboImageAndSpecimenBaseMiddleware;