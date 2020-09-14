const { expect } = require("chai");

describe("AXIOS-CLIENT Test", function() {
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	let client = undefined;
	const tmp = {};

	it("can do create a client", function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const Client = require(process.env.PROJECT_ROOT + "/src/client/api.js");
		client = new Client();
	});

	it("can login", async function() {
		try {
			const { auth, api } = client;
			const loginResponse = await auth.login({
				name: "administrator",
				password: "admin123"
			});
		} catch(error) {
			throw error;
		}
	});
	it("can getMany", async function() {
		try {
			const { auth, api } = client;
			const responseGetManySessions = await api.sessions.getMany({
				fields: ["id", "refresh_token"],
				where: [["id_user", "=", 1]],
				limit: 1,
				page: 1,
			});
			expect(typeof responseGetManySessions.data.data).to.equal("object");
			expect(typeof responseGetManySessions.data.data.items).to.equal("object");
			expect(responseGetManySessions.data.data.items.length).to.not.equal(0);
			expect(typeof responseGetManySessions.data.data.items[0]).to.equal("object");
			expect(Object.keys(responseGetManySessions.data.data.items[0]).length).to.equal(2);
			expect(typeof responseGetManySessions.data.data.items[0]["sessions.refresh_token"]).to.equal("string");
			expect(typeof responseGetManySessions.data.data.items[0]["sessions.id"]).to.equal("number");
			tmp.sessionId = responseGetManySessions.data.data.items[0]["sessions.id"];
		} catch(error) {
			throw error;
		}
	});
	it("can getOne", async function() {
		try {
			const { auth, api } = client;
			const responseGetOneSession = await api.sessions.getOne(tmp.sessionId, {
				fields: ["id", "refresh_token"],
			});
			expect(typeof responseGetOneSession.data).to.equal("object");
			expect(typeof responseGetOneSession.data.data).to.equal("object");
			expect(typeof responseGetOneSession.data.data.item).to.equal("object");
			expect(typeof responseGetOneSession.data.data.item["sessions.id"]).to.equal("number");
			expect(typeof responseGetOneSession.data.data.item["sessions.refresh_token"]).to.equal("string");
		} catch(error) {
			throw error;
		}
	});
	it("can postMany", async function() {
		try {
			const { auth, api } = client;
			const responsePostManySessions = await api.sessions.postMany([{
				session_token: "000",
				refresh_token: "001"
			}, {
				session_token: "002",
				refresh_token: "003"
			}, {
				session_token: "004",
				refresh_token: "005"
			}]);
			expect(typeof responsePostManySessions.data).to.equal("object");
			expect(typeof responsePostManySessions.data.data).to.equal("object");
			expect(typeof responsePostManySessions.data.data.operation).to.equal("object");
			expect(typeof responsePostManySessions.data.data.operation.affectedRows).to.equal("number");
			expect(responsePostManySessions.data.data.operation.affectedRows).to.equal(3);
		} catch(error) {
			throw error;
		}
	});
	it("can postOne", async function() {
		try {
			const { auth, api } = client;
			const responsePostOneSession = await api.sessions.postOne({
				session_token: "006",
				refresh_token: "007"
			});
			expect(typeof responsePostOneSession.data).to.equal("object");
			expect(typeof responsePostOneSession.data.data).to.equal("object");
			expect(typeof responsePostOneSession.data.data.operation).to.equal("object");
			expect(typeof responsePostOneSession.data.data.operation.affectedRows).to.equal("number");
			expect(responsePostOneSession.data.data.operation.affectedRows).to.equal(1);
		} catch(error) {
			throw error;
		}
	});
	it("can putMany", async function() {
		try {
			const { auth, api } = client;
			const responsePutManySessions = await api.sessions.putMany({
				where: [
					["session_token", "=", "006"]
				],
				data: {
					session_token: "changed",
					refresh_token: "changed",
				}
			});
			expect(typeof responsePutManySessions.data).to.equal("object");
			expect(typeof responsePutManySessions.data.data).to.equal("object");
			expect(typeof responsePutManySessions.data.data.operation).to.equal("object");
			expect(typeof responsePutManySessions.data.data.operation.affectedRows).to.equal("number");
			expect(responsePutManySessions.data.data.operation.affectedRows).to.equal(1);
		} catch(error) {
			throw error;
		}
	});
	it("can putOne", async function() {
		try {
			const { auth, api } = client;
			const responsePutOneSession = await api.sessions.putOne(tmp.sessionId, {
				session_token: "changed too",
				refresh_token: "changed too",
			});
			expect(typeof responsePutOneSession.data).to.equal("object");
			expect(typeof responsePutOneSession.data.data).to.equal("object");
			expect(typeof responsePutOneSession.data.data.operation).to.equal("object");
			expect(typeof responsePutOneSession.data.data.operation.affectedRows).to.equal("number");
			expect(responsePutOneSession.data.data.operation.affectedRows).to.equal(1);
		} catch(error) {
			throw error;
		}
	});
	it("can deleteMany", async function() {
		try {
			const { auth, api } = client;
			const responseDeleteManySessions = await api.sessions.deleteMany({
				where: [
					["session_token", "like", "changed%"]
				]
			});
			expect(typeof responseDeleteManySessions.data).to.equal("object");
			expect(typeof responseDeleteManySessions.data.data).to.equal("object");
			expect(typeof responseDeleteManySessions.data.data.operations).to.equal("object");
			expect(typeof responseDeleteManySessions.data.data.operations.length).to.equal("number");
			expect(responseDeleteManySessions.data.data.operations.length).to.not.equal(0);
			expect(typeof responseDeleteManySessions.data.data.operations[0]).to.equal("object");
			expect(typeof responseDeleteManySessions.data.data.operations[0].affectedRows).to.equal("number");
			expect(responseDeleteManySessions.data.data.operations[0].affectedRows).to.equal(2);
		} catch(error) {
			throw error;
		}
	});
	it("can deleteOne", async function() {
		try {
			const { auth, api } = client;
			const responseGetManySessions = await api.sessions.getMany({
				where: [
					["session_token", "in", ["000", "002", "004"]]
				]
			});
			const ids = responseGetManySessions.data.data.items.map(item => item["sessions.id"]);
			const responseDeleteOneSession = await api.sessions.deleteOne(ids[0]);
			expect(typeof responseDeleteOneSession.data).to.equal("object");
			expect(typeof responseDeleteOneSession.data.data).to.equal("object");
			expect(typeof responseDeleteOneSession.data.data.operation).to.equal("object");
			expect(typeof responseDeleteOneSession.data.data.operation.affectedRows).to.equal("number");
			expect(responseDeleteOneSession.data.data.operation.affectedRows).to.equal(1);
			for(let index=1; index < ids.length; index++) {
				const id = ids[index];
				await api.sessions.deleteOne(id);
			}
		} catch(error) {
			throw error;
		}
	});
	it("can getFile", async function() {
		try {
			const { auth, api } = client;
			// const responseDeleteOneSession = await api.sessions.deleteOne();

		} catch(error) {
			throw error;
		}
	});
	it("can setFile", async function() {
		try {
			const { auth, api } = client;
			// const responseDeleteOneSession = await api.sessions.deleteOne();

		} catch(error) {
			throw error;
		}
	});
	it("can logout", async function() {
		try {
			const { auth, api } = client;
			const responseGetLogoutResponse = await auth.logout();
			expect(typeof responseGetLogoutResponse.data).to.equal("object");
			expect(typeof responseGetLogoutResponse.data.data).to.equal("object");
			expect(typeof responseGetLogoutResponse.data.data.message).to.equal("string");
		} catch(error) {
			throw error;
		}
	});

});