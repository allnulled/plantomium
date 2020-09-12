module.exports = function(argv) {
	const args = require("yargs-parser")((argv || process.argv).join(" "));
	require(process.env.PROJECT_ROOT + "/src/cms.js").markets.add(args);
};