const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	service: cms.utils.requireProcessDirectory(__dirname + "/service")
};