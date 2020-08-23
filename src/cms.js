const cms = { settings: {} };

/**
 * 
 * ----
 * 
 * ### `/src/cms.js`
 * 
 * @name `cms`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = cms;

require("nodelive").PREFERRED_EDITOR = "gedit";
require(__dirname + "/deploy/load-env.js")(cms);
require(__dirname + "/deploy/load-api.js")(cms);


cms.initialized = (async function() {
	try {
		cms.deploy.createApp(cms);
		cms.deploy.createServer(cms);
		return cms.deploy.regenerateDb(cms).then(async function() {
			try {
				await cms.deploy.regenerateRest(cms);
				cms.deploy.mountRouter(cms);
				cms.deploy.mountSockets(cms);
				return await new Promise((ok, fail) => cms.deploy.startServer(cms, ok)); 
			} catch(error) {
				throw error;
			}
		});
	} catch(error) {
		throw error;
	}
})();
