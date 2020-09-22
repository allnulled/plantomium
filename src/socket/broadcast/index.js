const fs = require("fs");
const path = require("path");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const say = msg => (data, next) => console.log(msg) || next()

cms.utils.trace("cms.socket.broadcast");

module.exports = {
	factory() {
		return this.utils.createSocket(__dirname, "/broadcast", [
			this.auth.middlewares.onlySocket([
				["permissions", ["to administrate"]]
			])
		]);
	}
}


