const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

cms.utils.trace("[I18N...]");
cms.i18n = require(process.env.PROJECT_ROOT + "/src/i18n/index.js");
cms.utils.trace("[MARKETS...]");
cms.markets = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/markets");
cms.utils.trace("[PLUGINS...]");
cms.plugins = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/plugins");
cms.utils.trace("[HOOKS...]");
cms.hooks = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/hooks");
cms.utils.trace("[DEPLOY...]");
cms.deploy = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/deploy");
