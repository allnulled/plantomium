const Middleware = require(__dirname + "/../middleware.js");

class ImageBaseMiddleware extends Middleware {
	
	static get Table() {
		return "image";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/image.js")
	}

}

module.exports = ImageBaseMiddleware;