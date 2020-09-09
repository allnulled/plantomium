const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");
const path = require("path");
const servicesDirectory = path.resolve(__dirname, "service");

const service = fs.readdirSync(servicesDirectory).reduce(function(output, file) {
	const dirpath = path.resolve(servicesDirectory, file);
	const filepath = path.resolve(servicesDirectory, file, "index.js");
	const filestat = fs.lstatSync(filepath);
	if(filestat.isFile()) {
		output[file] = cms.utils.requireDirectoryFile(dirpath, "index.js", cms);
	}
	return output;
}, {});

module.exports = { service };