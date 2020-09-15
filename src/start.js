const cms = require(__dirname + "/cms.js");

cms.initialized = (async function() {
	try {
		cms.utils.trace("loading app...");
		cms.deploy.createApp(cms);
		cms.utils.trace("loading server...");
		cms.deploy.createServer(cms);
		cms.utils.trace("loading database...");
		return cms.deploy.regenerateDb(cms).then(async function() {
			try {
				cms.utils.trace("synchronizing with database...");
				await cms.deploy.regenerateRest(cms);
				cms.utils.trace("loading router...");
				await cms.deploy.mountRouter(cms);
				cms.utils.trace("loading sockets...");
				await cms.deploy.mountSockets(cms);
				cms.utils.trace("starting server...");
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