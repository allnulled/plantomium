const {
	expect
} = require("chai");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const cms = require(__dirname + "/../src/cms.js");
const Utils = require(__dirname + "/utils.js");

describe("REST Test (controllers)", function() {

	this.timeout(10 * 1000);
	
	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");
	let axiosInstance = undefined;
	let permissionInsertedId = 0;

	it("can load", async function() {
		try {
			await cms.initialized;
		} catch (error) {
			throw error;
		}
	});

	it("can login", async function() {
		try {
			const loginResponse = await axios.post(Utils.url("/auth/v1/login"), {
				name: "administrator",
				password: "admin123"
			});
			axiosInstance = axios.create();
			axiosInstance.defaults.headers.common.Authorization = "Bearer: " + loginResponse.data.data.session_token;
		} catch(error) {
			throw error;
		}
	});

	it("can get schema", async function() {
		try {
			const responsePermissions = await axiosInstance.get(Utils.url("/api/v1/permissions/@"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
		} catch (error) {
			throw error;
		}
	});

	it("can post one", async function() {
		try {
			const responsePermissions = await axiosInstance.post(Utils.url("/api/v1/permissions/0"), {
				name: "some permission"
			});
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			permissionInsertedId = responsePermissions.data.data.operation.insertId;
			expect(responsePermissions.data.data.operation.affectedRows).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can get many", async function() {
		try {
			const responsePermissions = await axiosInstance.get(Utils.url("/api/v1/permissions"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.items).to.equal("object");
			expect(responsePermissions.data.data.items.length).to.equal(2); // administration and recently created "some permission"
		} catch (error) {
			throw error;
		}
	});

	it("can get one", async function() {
		try {
			const responsePermissions = await axiosInstance.get(Utils.url(`/api/v1/permissions/${permissionInsertedId}`));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.item).to.equal("object");
			expect(responsePermissions.data.data.item["permissions.name"]).to.equal("some permission");
		} catch (error) {
			throw error;
		}
	});

	it("can put one", async function() {
		this.timeout(999999)
		try {
			const responseUpdatePermissions = await axiosInstance.put(Utils.url(`/api/v1/permissions/${permissionInsertedId}`), {
				name: "some other permission"
			});
			expect(typeof responseUpdatePermissions.data).to.equal("object");
			expect(typeof responseUpdatePermissions.data.data).to.equal("object");
			expect(typeof responseUpdatePermissions.data.data.operation).to.equal("object");
			const responsePermissions = await axiosInstance.get(Utils.url(`/api/v1/permissions/${permissionInsertedId}`));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.item).to.equal("object");
			expect(responsePermissions.data.data.item["permissions.name"]).to.equal("some other permission");
		} catch (error) {
			throw error;
		}
	});

	it("can delete one", async function() {
		try {
			const responseDeletePermissions = await axiosInstance.delete(Utils.url(`/api/v1/permissions/${permissionInsertedId}`));
			expect(typeof responseDeletePermissions.data).to.equal("object");
			expect(typeof responseDeletePermissions.data.data).to.equal("object");
			expect(typeof responseDeletePermissions.data.data.operation).to.equal("object");
			expect(responseDeletePermissions.data.data.operation.affectedRows).to.equal(1);
			const responsePermissions = await axiosInstance.get(Utils.url("/api/v1/permissions"));
			expect(typeof responsePermissions.data).to.equal("object");
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(typeof responsePermissions.data.data.items).to.equal("object");
			expect(responsePermissions.data.data.items.length).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can post one file", async function() {
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(__dirname + "/assets/ok.png"), { filename: "ok.png" });
			const response = await axiosInstance.post(Utils.url("/api/v1/users/1/profile_picture"), form, {
				headers: {
					...form.getHeaders()
				}
			});
		} catch (error) {
			throw error;
		}
	});

	it("can get one file", async function() {
		try {
			const response = await axiosInstance.get(Utils.url("/api/v1/users/1/profile_picture/png"));
			expect(typeof response.data).to.equal("string");
			expect(response.data.length).to.equal(2598);
		} catch (error) {
			throw error;
		}
	});

});