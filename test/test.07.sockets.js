const axios = require("axios");
const { expect } = require("chai");
//const asynchandler = require("@allnulled/asynchandler");
const socketClient = require("socket.io-client");
const noop = function() {};

describe("SOCKETS Test", function() {

	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can connect to broadcast socket", function(ok) {
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const broadcastUrl = baseUrl + "/broadcast";
		const client = socketClient(broadcastUrl);
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


	it("can connect to chat socket", function(ok) {
		const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
		const chatUrl = baseUrl + "/chat";
		const client = socketClient(chatUrl);
		client.connect();
		client.on("message_sent", function(message) {
			expect(typeof message).to.equal("object");
			expect(message.msg).to.equal("Hello!");
			client.disconnect();
			ok();
		});
		// trigger the chat:
		client.emit("send_message", {msg: "Hello!"});
	});

});