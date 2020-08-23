const { expect } = require("chai");
const axios = require("axios");
const runtime = require(__dirname + "/../index.js");

describe("STOP Test", function() {

	this.timeout(10*1000);

	it("can STOP", async function() {
		try {
			const cms = await runtime;
			await cms.deploy.stopServer(cms);
		} catch(error) {
			// console.error(error);
			throw error;
		}
	});

})