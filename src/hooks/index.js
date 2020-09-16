const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = {
	service: cms.utils.requireHooksDirectory(__dirname + "/service", false)
};