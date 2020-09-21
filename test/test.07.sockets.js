const axios = require("axios");
const {
	expect
} = require("chai");
//const asynchandler = require("@allnulled/asynchandler");
const socketClient = require("socket.io-client");
const noop = function() {};

describe("SOCKETS Test", function() {

	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");
	let session_token = undefined;

	before(async function() {
		try {
			const loginResponse = await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/login", {
				name: "administrator",
				password: "admin123",
			});
			session_token = loginResponse.data.data.session_token;
		} catch (error) {
			throw error;
		}
	});

	after(async function() {
		try {
			await axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/logout", {
				headers: {
					authorization: "Bearer: " + session_token
				}
			});
		} catch (error) {
			throw error;
		}
	});

	it.skip("can connect to broadcast socket", function(ok) {
		this.timeout(6*1000);
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const broadcastUrl = baseUrl + "/broadcast";
		const client = socketClient(broadcastUrl, {
			transports: ["websocket"],
			secure: true,
			rejectUnauthorized: false,
			extraHeaders: {
				authorization: "Bearer: " + session_token
			},
			timeout: 2000
		});
		client.connect()
		client.on("rest_event", function(data) {
			expect(typeof data).to.equal("object");
			expect(typeof data.headers).to.equal("object");
			expect(typeof data.query).to.equal("object");
			expect(typeof data.params).to.equal("object");
			client.disconnect();
			ok();
		});
		client.on("connect", function(data) {
			//ok(new Error("Connected"))
			// trigger the broadcast:
			axios.get(baseUrl + "/api/v1/trait?limit=2", {
				headers: {
					authorization: "Bearer: " + session_token
				}
			}).then(noop).catch(console.error);
		});
		client.on("connect_error", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (1)"));
		});
		client.on("connect_timeout", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (2)"));
		});
		client.on("reconnect", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (3)"));
		});
		client.on("reconnect_attempt", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (4)"));
		});
		client.on("reconnect_error", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (5)"));
		});
		client.on("reconnect_failed", function(data) {
			client.disconnect();
			ok(new Error("Failed to load broadcast socket connection (6)"));
		});
	});


	it.skip("can connect to chat socket", function(ok) {
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const chatUrl = baseUrl + "/chat";
		const client = socketClient(chatUrl, {
			transports: ["websocket"], // THIS LINE IS IMPORTANT ON HTTP[[[[ S ]]]]
			secure: true,
			rejectUnauthorized: false,
			extraHeaders: {
				authorization: "Bearer: " + session_token
			}
		});
		client.connect();
		let footprint = 0;
		client.on("message_sent", function(message) {
			expect(typeof message).to.equal("object");
			expect(message.msg).to.equal("Hello!");
			footprint += 100;
			client.emit("send_message", {
				msg: "x".repeat(501)
			});
		});
		client.on("message_error", function(message) {
			expect(typeof message).to.equal("object");
			expect(footprint).to.equal(100);
			client.disconnect();
			ok();
		});
		// trigger the chat:
		client.emit("send_message", {
			msg: "Hello!"
		});
	});

	it.skip("cannot connect if not authenticated", function(done) {
		this.timeout(8*1000)
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const broadcastUrl = baseUrl + "/broadcast";
		const client = socketClient(broadcastUrl, {
			transports: ["websocket"],
			secure: true,
			rejectUnauthorized: false,
			extraHeaders: {
				// NO AUTHORIZATION:
				// authorization: "Bearer: " + session_token
			}
		});
		client.on("disconnect", function() {
			console.log("Disconnected!!!")
			client.close();
			done();
		});
		client.connect();
	});

});