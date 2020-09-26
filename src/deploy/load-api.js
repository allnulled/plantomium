module.exports = function(cms) {
	// 1. DEPLOY API
	if (!cms.deploy) {
		cms.utils.trace("[DEPLOY...]");
		cms.deploy = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/deploy");
	}
	// 2. I18N API
	if (!cms.i18n) {
		cms.utils.trace("[I18N...]");
		cms.deploy.loadI18n(cms);
	}
	// 3. MARKETS API
	if (!cms.markets) {
		cms.utils.trace("[MARKETS...]");
		cms.deploy.loadMarkets(cms);
	}
	// 4. PLUGINS API
	if (!cms.plugins) {
		cms.utils.trace("[PLUGINS...]");
		cms.deploy.loadPlugins(cms);
	}
	// 5. HOOKS API
	if (!cms.hooks) {
		cms.utils.trace("[HOOKS...]");
		cms.deploy.loadHooks(cms);
	}
	// 0. SCHEMA
	if (!cms.originalSchema) {
		cms.utils.trace("[ORIGINAL SCHEMA...]");
		cms.deploy.loadOriginalSchema(cms);
	}
	if (!cms.schema) {
		cms.utils.trace("[VIRTUAL SCHEMA...]");
		cms.deploy.loadSchema(cms);
	}
	// 1. EMAIL API
	if (!cms.email) {
		cms.utils.trace("[EMAIL...]");
		cms.deploy.loadEmail(cms);
	}
	// 2. STORE API
	if (!cms.store) {
		cms.utils.trace("[STORE...]");
		cms.deploy.loadStore(cms);
	}
	// 3. JSON API
	if (!cms.json) {
		cms.utils.trace("[JSON...]");
		cms.deploy.loadJson(cms);
	}
	cms.hooks.trigger("project.on-load-api");
};