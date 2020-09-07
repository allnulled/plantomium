const { expect } = require("chai");
const socketClient = require("socket.io-client");

describe("BROADCAST Test", function() {

	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can connect to broadcast socket", async function() {
		const broadcastUrl = process.env.APP_URL + ":" + process.env.APP_PORT + "/broadcast";
		const client = socketClient(broadcastUrl);
		client.disconnect();
	});

	it("can connect to chat socket", async function() {
		const broadcastUrl = process.env.APP_URL + ":" + process.env.APP_PORT + "/broadcast";
		const client = socketClient(broadcastUrl);
		client.disconnect();
	});

});