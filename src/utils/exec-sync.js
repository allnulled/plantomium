module.exports = function(command, others = {}) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.execSync");
	return require("child_process").execSync(command, Object.assign({stdio:[process.stdin, process.stdout, process.stderr]}, others));
};
