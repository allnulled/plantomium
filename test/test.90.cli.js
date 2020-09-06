const { expect } = require("chai");
const { exec } = require("child_process");
const handleCommand = require(__dirname + "/../src/utils/handle-command.js");

describe("CLI Tests", function() {

	this.timeout(5 * 10000)

	before(async function() {
		try {
			const cms = require(__dirname + "/../src/cms.js");
			await cms.initialized;
			await cms.deploy.stopServer(cms);
		} catch(error) {
			throw error;
		}
	});

	it("can: cms", function(done) {
		exec("cms", handleCommand(0, 0, done));
	});

});