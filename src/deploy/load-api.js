const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

cms.utils.trace("loading cms.markets...");
cms.markets = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/markets");
cms.utils.trace("loading cms.plugins...");
cms.plugins = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/plugins");
cms.utils.trace("loading cms.hooks...");
cms.hooks = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/hooks");
cms.utils.trace("loading cms.deploy...");
cms.deploy = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/deploy");
