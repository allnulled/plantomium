module.exports = function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms auth login");
	const args = require("yargs-parser")(argv);
	if((!("name" in args)) && (!("email" in args))) {
		throw new Error("Required <user> or <email> on <cms login> [ERR:4855]");
	}
	if(!("password" in args)) {
		throw new Error("Required <password> on <cms login> [ERR:7069]");
	}
	LL(args);
}