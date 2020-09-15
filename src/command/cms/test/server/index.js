const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const isCoverage = process.argv.reduce((output, item) => {
	if(item === "--coverage") {
		output = true;
	}
	return output;
}, false);
if(isCoverage) {
	module.exports = cms.utils.execSync("npm run cover:reset", { cwd: process.env.PROJECT_ROOT });
} else {
	module.exports = cms.utils.execSync("npm run test:reset", { cwd: process.env.PROJECT_ROOT });
}