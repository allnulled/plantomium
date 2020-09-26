const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

cms.utils.trace("cms.process");

module.exports = {
	service: cms.utils.requireProcessDirectory(__dirname + "/service")
};