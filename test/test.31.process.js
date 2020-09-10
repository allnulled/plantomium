const axios = require("axios");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const {
	expect
} = require("chai");

describe("PROCESS Test", function() {

	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
	let processData = undefined,
		session_token = undefined;

	it("can login for test", async function() {
		const loginResp = await axios.post(baseUrl + "/auth/v1/login", {
			name: "administrator",
			password: "admin123",
		});
		session_token = cms.utils.dataGetter(loginResp, ["data", "data", "session_token"], undefined);
		expect(typeof session_token).to.equal("string");
	});

	it("can create an example", async function() {
		try {
			const {
				data: post1
			} = await axios.post(baseUrl + "/process/v1/example/hello", {
				data: {
					type: "request"
				},
			}, {
				headers: {
					authorization: "Bearer: " + session_token
				}
			});
			processData = {
				process: cms.utils.dataGetter(post1, ["data", "process"]),
				transactions: [cms.utils.dataGetter(post1, ["data", "transaction"])],
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
		expect(typeof processData !== "undefined");
	});

	it("can make step 1 of an example", async function() {
		try {
			const {
				data: post2
			} = await axios.post(baseUrl + "/process/v1/example/converse/1", {
				data: {}
			}, {
				headers: {
					authorization: "Bearer: " + session_token,
				}
			});
			processData.transactions.push(cms.utils.dataGetter(post2, ["data", "transaction"]));
		} catch (error) {
			throw error;
		}
	});

	it("can make step 2 of an example", async function() {
		try {
			const {
				data: post3
			} = await axios.post(baseUrl + "/process/v1/example/converse/1", {
				data: {}
			}, {
				headers: {
					authorization: "Bearer: " + session_token,
				}
			});
			processData.transactions.push(cms.utils.dataGetter(post3, ["data", "transaction"]));
		} catch (error) {
			throw error;
		}
	});

	it("can make check previous states", async function() {
		try {
			const {
				data: post4
			} = await axios.post(baseUrl + "/process/v1/example/converse/1", {
				data: {}
			}, {
				headers: {
					authorization: "Bearer: " + session_token,
				}
			});
			processData.transactions.push(cms.utils.dataGetter(post4, ["data", "transaction"]));
			expect(processData).to.deep.equal({
				process: 1,
				transactions: [1, 2, 3, 4]
			});
		} catch (error) {
			throw error;
		}
	});

	it("can delete an example", async function() {
		try {
			const {
				data: post5
			} = await axios.post(baseUrl + "/process/v1/example/good-bye/1", {
				data: {}
			}, {
				headers: {
					authorization: "Bearer: " + session_token,
				}
			});
			let anyError = undefined;
			const {
				data: post6
			} = await axios.post(baseUrl + "/process/v1/example/converse/1", {
				data: {}
			}, {
				headers: {
					authorization: "Bearer: " + session_token,
				}
			});
			expect(typeof post6).to.equal("object")
			expect(typeof post6.error).to.equal("object")
			expect(post6.error.message).to.equal("Process was not found [ERR:7880]")
		} catch (error) {
			throw error;
		}

	});

});