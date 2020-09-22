const fs = require("fs");
const path = require("path");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

cms.utils.trace("cms.socket.chat");

module.exports = {
	factory() {
		return this.utils.createSocket(__dirname, "/chat", [
			this.auth.middlewares.onlySocket({ authenticated: true })
		]);
	}
}