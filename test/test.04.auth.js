const {
	expect
} = require("chai");
const axios = require("axios");

describe("AUTHENTICATION & AUTHORIZATION Test", function() {

	const cms = require(__dirname + "/../src/cms.js");

	this.timeout(10 * 1000);

	const processData = {};

	it("can LOAD", async function() {
		try {
			await cms.initialized;
			expect(typeof cms).to.equal("object");
		} catch (error) {
			throw error;
		}
	});

	let confirmation_token, refresh_token, session_token, recovery_token;

	const userdata = {
		name: "whatever",
		password: "whatever.123",
		email: "whatever@whatever.we",
		full_name: "Mr. Whatever",
	};

	const debugResponses = function(...args) {
		//console.log(...args);
	}

	it("can REGISTER", async function() {
		try {
			const responseRegister = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/register", userdata);
			debugResponses(responseRegister.data);
			expect(typeof responseRegister.data).to.equal("object");
			expect(typeof responseRegister.data.data).to.equal("object");
			confirmation_token = responseRegister.data.data.confirmation_token;
		} catch (error) {
			console.error(error);
			throw error;
		}
	});

	it.skip("can (fail) REGISTER", async function() {
		try {
			const responseRegister = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/register", userdata);
			debugResponses(responseRegister.data);
			expect(typeof responseRegister.data).to.equal("object");
			expect(typeof responseRegister.data.error).to.equal("object");
			expect(responseRegister.data.error.message.indexOf("ER_DUP_ENTRY")).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

	it("can CONFIRM", async function() {
		try {
			const responseConfirm = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/confirm", {
				confirmation_token
			});
			debugResponses(responseConfirm.data);
			expect(typeof responseConfirm.data).to.equal("object");
			expect(typeof responseConfirm.data.data).to.equal("object");
			expect(typeof responseConfirm.data.data.recovery_token).to.equal("string");
			recovery_token = responseConfirm.data.data.recovery_token;
		} catch (error) {
			throw error;
		}
	});

	it.skip("can (fail) CONFIRM", async function() {
		try {
			const responseConfirm = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/confirm", {
				confirmation_token: "ok"
			});
			debugResponses(responseConfirm.data);
			expect(typeof responseConfirm.data).to.equal("object");
			expect(typeof responseConfirm.data.error).to.equal("object");
			expect(responseConfirm.data.error.message.indexOf("Require")).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

	it("can LOGIN", async function() {
		try {
			const responseLogin = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/login", userdata);
			debugResponses(responseLogin.data);
			expect(typeof responseLogin.data).to.equal("object");
			expect(typeof responseLogin.data.data).to.equal("object");
			expect(typeof responseLogin.data.data.refresh_token).to.equal("string");
			refresh_token = responseLogin.data.data.refresh_token;
			session_token = responseLogin.data.data.session_token;
		} catch (error) {
			throw error;
		}
	});

	it("can REFRESH", async function() {
		try {
			const responseRefresh = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/refresh", { refresh_token }, {
				headers: {
					Authorization: "Bearer " + session_token
				}
			});
			debugResponses(responseRefresh.data);
			expect(typeof responseRefresh.data).to.equal("object");
			expect(typeof responseRefresh.data.data).to.equal("object");
			expect(typeof responseRefresh.data.data.refresh_token).to.equal("string");
			refresh_token = responseRefresh.data.data.refresh_token;
			session_token = responseRefresh.data.data.session_token;
		} catch (error) {
			throw error;
		}
	});

	it("can LOGOUT", async function() {
		try {
			const responseLogout = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/logout", { session_token }, {
				headers: {
					Authorization: "Bearer " + session_token
				}
			});
			debugResponses(responseLogout.data);
			expect(typeof responseLogout.data).to.equal("object");
			expect(typeof responseLogout.data.data).to.equal("object");
		} catch (error) {
			throw error;
		}
	});

	it("can RECOVER PASSWORD", async function() {
		try {
			const responseRecover = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/recover", userdata);
			debugResponses(responseRecover.data);
			expect(typeof responseRecover.data).to.equal("object");
			expect(typeof responseRecover.data.data).to.equal("object");
			// @TOFIX: this step should be done via consulting the email, but we have already our recovery token...
			const password = "allelluyah.666";
			const responseChange = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/change", { recovery_token, password });
			debugResponses(responseChange.data);
			expect(typeof responseChange.data).to.equal("object");
			expect(typeof responseChange.data.data).to.equal("object");
			userdata.password = password;
		} catch (error) {
			throw error;
		}
	});

	it("can UNREGISTER", async function() {
		try {
			const loginResponse = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/login", userdata);
			debugResponses(loginResponse.data);
			expect(typeof loginResponse.data).to.equal("object");
			expect(typeof loginResponse.data.data).to.equal("object");
			session_token = loginResponse.data.data.session_token;
			const unregisterResponse = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/unregister", { password: userdata.password }, {
				headers: {
					Authorization: "Bearer: " + session_token
				}
			});
			debugResponses(unregisterResponse.data);
			expect(typeof unregisterResponse.data).to.equal("object");
			expect(typeof unregisterResponse.data.data).to.equal("object");
			const loginResponse2 = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/login", userdata);
			debugResponses(loginResponse2.data);
			expect(loginResponse2.data.error.message).to.equal("No user found");
		} catch (error) {
			throw error;
		}
	});

});