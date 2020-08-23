const { expect } = require("chai");
const axios = require("axios");
const cms = require(__dirname + "/../index.js");

describe("START Test", function() {

	this.timeout(10*1000);

	it("can START", async function() {
		try {
			await cms.initialized;
			expect(typeof cms).to.equal("object");
			const response1 = await axios.get(process.env.APP_URL + ":" + process.env.APP_PORT + "/api/v1/permissions")
			expect(typeof response1.data.data.total).to.equal("number");
		} catch(error) {
			console.error("could not start:", error);
			throw error;
		}
	});

})