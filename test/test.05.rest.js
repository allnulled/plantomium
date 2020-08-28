const {
	expect
} = require("chai");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const cms = require(__dirname + "/../src/cms.js");
const Utils = require(__dirname + "/utils.js");

describe("REST test: controllers", function() {

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
			const responsePermissions = await axios.get(Utils.url("/api/v1/permissions/@"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
		} catch (error) {
			throw error;
		}
	});

	it("can POST ONE", async function() {
		try {
			const responsePermissions = await axios.post(Utils.url("/api/v1/permissions/0"), {
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
			const responsePermissions = await axios.get(Utils.url("/api/v1/permissions"));
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
			const responsePermissions = await axios.get(Utils.url("/api/v1/permissions/1"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data["permissions.name"]).to.equal("some permission");
		} catch (error) {
			throw error;
		}
	});

	it("can PUT ONE", async function() {
		this.timeout(999999)
		try {
			const responseUpdatePermissions = await axios.put(Utils.url("/api/v1/permissions/1"), {
				name: "some other permission"
			});
			expect(typeof responseUpdatePermissions.data).to.equal("object");
			expect(typeof responseUpdatePermissions.data.data).to.equal("object");
			const responsePermissions = await axios.get(Utils.url("/api/v1/permissions/1"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data["permissions.name"]).to.equal("some other permission");
		} catch (error) {
			throw error;
		}
	});

	it("can DELETE ONE", async function() {
		try {
			const responseDeletePermissions = await axios.delete(Utils.url("/api/v1/permissions/1"));
			expect(typeof responseDeletePermissions.data).to.equal("object");
			expect(typeof responseDeletePermissions.data.data).to.equal("object");
			const responsePermissions = await axios.get(Utils.url("/api/v1/permissions"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.items).to.equal("object");
			expect(responsePermissions.data.data.items.length).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

	it("can POST ONE FILE", async function() {
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(__dirname + "/assets/ok.png"), { filename: "ok.png" });
			const response = await axios.post(Utils.url("/api/v1/users/1/profile_picture"), form, {
				headers: {
					...form.getHeaders()
				}
			});
		} catch (error) {
			throw error;
		}
	});

	it("can GET ONE FILE", async function() {
		try {
			const response = await axios.get(Utils.url("/api/v1/users/1/profile_picture/png"));
			expect(typeof response.data).to.equal("string");
			expect(response.data.length).to.equal(2598);
		} catch (error) {
			throw error;
		}
	});

});