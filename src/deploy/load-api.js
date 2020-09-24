module.exports = function(cms) {
	// 1. DEPLOY API
	cms.utils.trace("[DEPLOY...]");
	cms.deploy = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/deploy");
	// 2. I18N API
	cms.utils.trace("[I18N...]");
	cms.deploy.loadI18n(cms);
	// 3. MARKETS API
	cms.utils.trace("[MARKETS...]");
	cms.deploy.loadMarkets(cms);
	// 4. PLUGINS API
	cms.utils.trace("[PLUGINS...]");
	cms.deploy.loadPlugins(cms);
	// 5. HOOKS API
	cms.utils.trace("[HOOKS...]");
	cms.deploy.loadHooks(cms);
	cms.hooks.trigger("project.on-load-api");
};