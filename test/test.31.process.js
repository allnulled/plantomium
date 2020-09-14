const axios = require("axios");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const {
	expect
} = require("chai");

describe("PROCESS Test", function() {

	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");

	before(function() {
		//
	});

	after(function() {
		// 
	});

	const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
	let processData = undefined,
		session_token = undefined;

	skippable("can login for test", async function() {
		const loginResp = await axios.post(baseUrl + "/auth/v1/login", {
			name: "administrator",
			password: "admin123",
		});
		session_token = cms.utils.dataGetter(loginResp, ["data", "data", "session_token"], undefined);
		expect(typeof session_token).to.equal("string");
	});

	skippable("can create an example", async function() {
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

	skippable("can make step 1 of an example", async function() {
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

	skippable("can make step 2 of an example", async function() {
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

	skippable("can make check previous states", async function() {
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
			const processState = await axios.get(baseUrl + "/process/v1/example/view/1", {
				headers: {
					authorization: "Bearer: " + session_token
				}
			});
			expect(typeof processState.data.data.process).to.equal("object");
			expect(typeof processState.data.data.transactions).to.equal("object");
			expect(processState.data.data.process.transactions).to.equal(4);
			expect(processState.data.data.transactions.length).to.equal(4);
		} catch (error) {
			throw error;
		}
	});

	skippable("can delete an example", async function() {
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
			// dd(post5, post6)
			expect(typeof post6).to.equal("object")
			expect(typeof post6.error).to.equal("object")
			expect(post6.error.message).to.equal("Process was not found [ERR:7880]")
		} catch (error) {
			throw error;
		}

	});

});