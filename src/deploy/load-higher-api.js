module.exports = function(cms) {
	// 4. REST API
	if (!cms.rest) {
		cms.utils.trace("[REST...]");
		cms.deploy.loadRest(cms);
	}
	// 5. AUTH API
	if (!cms.auth) {
		cms.utils.trace("[AUTH...]");
		cms.deploy.loadAuth(cms);
	}
	// 6. HISTORY API
	if (!cms.history) {
		cms.utils.trace("[HISTORY...]");
		cms.deploy.loadHistory(cms);
	}
	// 7. ROUTER API
	if (!cms.router) {
		cms.utils.trace("[ROUTER...]");
		cms.deploy.loadRouter(cms);
	}
	// 8. PROCESS API
	if (!cms.process) {
		cms.utils.trace("[PROCESS...]");
		cms.deploy.loadProcess(cms);
	}
}