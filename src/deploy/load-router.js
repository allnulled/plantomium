module.exports = function(cms) {
	cms.router = require(process.env.PROJECT_ROOT + "/src/router/index.js")(cms);
}