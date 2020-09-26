module.exports = function(argv) {
	const fs = require("fs");
	const contents = require(process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json");
	console.log(JSON.stringify(contents, null, 4))
}