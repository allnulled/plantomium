describe("Server turn on", function() {
	it("can start the server", async () => {
		await require(__dirname + "/../src/cms.js").initialized;
	})
});