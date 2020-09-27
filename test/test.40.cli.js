const { expect } = require("chai");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

describe("CLI Test", function() {
	
	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");

	before(function() {
		//
	});

	after(function() {
		// 
	});

	skippable("can <cms login>", function() {
		cms.utils.execSync("cms login --name administrator --password admin123");
	});
		
	skippable("can <cms show session>", function() {
		cms.utils.execSync("cms show session > test/session-1.json");
	});
		
	skippable("can <cms logout>", function() {
		cms.utils.execSync("cms logout");
	});

});