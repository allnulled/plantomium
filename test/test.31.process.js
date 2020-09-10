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
	let posted = undefined, session_token = undefined;

	it("can login for test", async function() {
		const loginResp = await axios.post(baseUrl + "/auth/v1/login", {
			name: "administrator",
			password: "admin123",
		});
		session_token = cms.utils.dataGetter(loginResp, ["data","data","session_token"], undefined);
		expect(typeof session_token).to.equal("string");
	});

	it("can create an example", async function() {
		try {

			const post1 = await axios.post(baseUrl + "/process/v1/example/hello", {
				data: {type:"request"},
			}, {
				headers: {
					authorization: "Bearer: " + session_token
				}
			});
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