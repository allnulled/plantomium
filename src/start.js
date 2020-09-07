const cms = require(__dirname + "/cms.js");

cms.initialized = (async function() {
	try {
		cms.deploy.createApp(cms);
		cms.deploy.createServer(cms);
		return cms.deploy.regenerateDb(cms).then(async function() {
			try {
				await cms.deploy.regenerateRest(cms);
				cms.deploy.mountRouter(cms);
				await cms.deploy.mountSockets(cms);
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