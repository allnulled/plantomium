module.exports = function(cms) {
	cms.store = require(process.env.PROJECT_ROOT + "/src/store/index.js");
}