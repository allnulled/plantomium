describe("Server turn off", async function() {

	it("can turn off the server", async () => {
		try {
			const cms = require(__dirname + "/../src/cms.js");
			await cms.initialized;
			try {
				await cms.deploy.stopServer(cms);
			} catch (error) {}
		} catch (error) {
			console.error(error);
			throw error;
		}
	});
	
});