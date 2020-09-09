const axios = require("axios");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const { expect } = require("chai");

describe("PROCESS Test", function() {
	
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});
	
	const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
	let posted = undefined;

	it("can create an example", async function() {
		try {
			const post1 = await axios.post(baseUrl + "/process/v1/example/hello", {data: {type:"request"}});
			posted = post1.data;
		} catch(error) {
			console.error(error);
			throw error;
		}
		expect(typeof posted !== "undefined");
	});

	it("can make step 1 of an example", async function() {
		try {
			const {data:post1} = await axios.post(baseUrl + "/process/v1/example/converse/1", {data: {type:"request"}});
		} catch(error) {
			throw error;
		}
	});

	it("can make step 2 of an example", function(done) {
		done();
	});

	it("can make step 3 of an example", function(done) {
		done();
	});

	it("can delete an example", function(done) {
		done();
	});

});