const fs = require("fs");

module.exports = function(args) {
	const argv = require("yargs-parser")(args);
	const file = fs.createWriteStream(argv.to);
	if(typeof argv.from !== "string") {
		throw new Error("Required <from> parameter on <cms download> [ERR:3982]");
	}
	if(typeof argv.to !== "string") {
		throw new Error("Required <to> parameter on <cms download> [ERR:3985]");
	}
	const isHttp = argv.from.startsWith("http:")
	const isHttps = argv.from.startsWith("https:")
	let serverProtocol = undefined;
	if(isHttp) {
		serverProtocol = require("http");
	} else if(isHttps) {
		serverProtocol = require("https");
	} else {
		throw new Error("Protocol not identified");
	}
	return new Promise(function(ok, fail) {
		const request = serverProtocol.get(argv.from, (response) => {
			response.pipe(file);
			return ok();
		});
	});
}