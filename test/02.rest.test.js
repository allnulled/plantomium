const {
	expect
} = require("chai");
const axios = require("axios");
const cms = require(__dirname + "/../src/cms.js");
const T = require(__dirname + "/test-utils.js");

describe("REST Test", function() {

	this.timeout(10 * 1000);

	it("can LOAD", async function() {
		try {
			await cms.initialized;
		} catch (error) {
			throw error;
		}
	});

	it("can GET SCHEMA", async function() {
		try {
			const responsePermissions = await axios.get(T.url("/api/v1/permissions/@"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
		} catch (error) {
			throw error;
		}
	});

	it("can POST ONE", async function() {
		try {
			const responsePermissions = await axios.post(T.url("/api/v1/permissions/0"), {
				name: "some permission"
			});
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data.affectedRows).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can GET MANY", async function() {
		try {
			const responsePermissions = await axios.get(T.url("/api/v1/permissions"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.items).to.equal("object");
			expect(responsePermissions.data.data.items.length).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can GET ONE", async function() {
		try {
			const responsePermissions = await axios.get(T.url("/api/v1/permissions/1"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data.name).to.equal("some permission");
		} catch (error) {
			throw error;
		}
	});

	it("can PUT ONE", async function() {
		this.timeout(999999)
		try {
			const responseUpdatePermissions = await axios.put(T.url("/api/v1/permissions/1"), {
				name: "some other permission"
			});
			expect(typeof responseUpdatePermissions.data).to.equal("object");
			expect(typeof responseUpdatePermissions.data.data).to.equal("object");
			const responsePermissions = await axios.get(T.url("/api/v1/permissions/1"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data.name).to.equal("some other permission");
		} catch (error) {
			throw error;
		}
	});

	it("can DELETE ONE", async function() {
		try {
			const responseDeletePermissions = await axios.delete(T.url("/api/v1/permissions/1"));
			expect(typeof responseDeletePermissions.data).to.equal("object");
			expect(typeof responseDeletePermissions.data.data).to.equal("object");
			const responsePermissions = await axios.get(T.url("/api/v1/permissions"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.items).to.equal("object");
			expect(responsePermissions.data.data.items.length).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

	it("can GET ONE FILE", async function() {
		try {
			const response = await axios.get(T.url("/api/v1/user/profile_picture/1"));

		} catch(error) {
			throw error;
		}
	});

	it("can POST ONE FILE", async function() {
		try {
			// const response = await axios.post(T.url("/api/v1/user/file"))
		} catch(error) {
			throw error;
		}
	});

})