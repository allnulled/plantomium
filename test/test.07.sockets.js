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
			axios.post(process.env.APP_URL + ":" + process.env.APP_PORT + "/auth/v1/logout", {
				headers: {
					authorization: "Bearer: " + session_token
				}
			});
		} catch (error) {
			throw error;
		}
	});

	skippable("can connect to broadcast socket", function(ok) {
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const broadcastUrl = baseUrl + "/broadcast";
		const client = socketClient(broadcastUrl, {
			transports: ["websocket"],
			secure: true,
			rejectUnauthorized: false,
			extraHeaders: {
				authorization: "Bearer: " + session_token
			}
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
		// trigger the broadcast:
		axios.get(baseUrl + "/api/v1/permissions?limit=2").then(noop).catch(console.error);
	});


	skippable("can connect to chat socket", function(ok) {
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

	skippable("cannot connect if not authenticated", function(done) {
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
		client.on("reconnect", function() {
			client.disconnect();
			done();
		});
		client.connect();
	});

});