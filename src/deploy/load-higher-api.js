module.exports = function(cms) {
	// 1. EMAIL API
	cms.utils.trace("[EMAIL...]");
	cms.deploy.loadEmail(cms);
	// 2. STORE API
	cms.utils.trace("[STORE...]");
	cms.deploy.loadStore(cms);
	// 3. JSON API
	cms.utils.trace("[JSON...]");
	cms.deploy.loadJson(cms);
	// 4. REST API
	cms.utils.trace("[REST...]");
	cms.deploy.loadRest(cms);
	// 5. AUTH API
	cms.utils.trace("[AUTH...]");
	cms.deploy.loadAuth(cms);
	// 6. HISTORY API
	cms.utils.trace("[HISTORY...]");
	cms.deploy.loadHistory(cms);
	// 7. ROUTER API
	cms.utils.trace("[ROUTER...]");
	cms.deploy.loadRouter(cms);
	// 8. PROCESS API
	cms.utils.trace("[PROCESS...]");
	cms.deploy.loadProcess(cms);
}