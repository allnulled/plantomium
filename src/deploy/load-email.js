module.exports = function(cms) {
	cms.email = {};
	cms.email.agents = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/email/agents");
	cms.email.templates = cms.utils.requireTemplatesDirectory(process.env.PROJECT_ROOT + "/src/email/templates");
}