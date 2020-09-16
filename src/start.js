const cms = require(__dirname + "/cms.js");

cms.initialized = (async function() {
	try {
		cms.utils.trace("[APP...]");
		cms.deploy.createApp(cms);
		cms.utils.trace("[SERVER...]");
		cms.deploy.createServer(cms);
		cms.utils.trace("[DATABASE...]");
		return cms.deploy.regenerateDb(cms).then(async function() {
			try {
				cms.utils.trace("[REST...]");
				await cms.deploy.regenerateRest(cms);
				cms.utils.trace("[ROUTER...]");
				await cms.deploy.mountRouter(cms);
				cms.utils.trace("[SOCKETS...]");
				await cms.deploy.mountSockets(cms);
				cms.utils.trace("[STARTING SERVER...]");
				return await new Promise((ok, fail) => cms.deploy.startServer(cms, ok)); 
			} catch(error) {
				throw error;
			}
		});
	} catch(error) {
		console.error(error);
	}
})();

module.exports = cms.initialized;