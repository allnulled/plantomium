const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.hooks");

module.exports = {
	service: cms.utils.requireHooksDirectory(__dirname + "/service", false)
};