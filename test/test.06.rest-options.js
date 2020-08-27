const {
	expect
} = require("chai");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const cms = require(__dirname + "/../src/cms.js");
const Utils = require(__dirname + "/utils.js");

describe("REST test: options", function() {

	this.timeout(10 * 1000);

	it("can LOAD", async function() {
		try {
			await cms.initialized;
		} catch (error) {
			throw error;
		}
	});

	it("can fill permissions table", async function() {
		try {
			const data = [];
			const items = 20;
			for(let index=0; index < items; index++) {
				data.push({ name: "permission " + index });
			}
			const response = await axios.post(Utils.url("/api/v1/permissions"), { data });
			expect(typeof response.data.data).to.equal("object");
			expect(response.data.data.affectedRows).to.equal(items);
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.where> extension option", async function() {
		try {
			const response = await axios.get(Utils.url("/api/v1/permissions"));
			expect(response.data.data.total).to.equal(18);
			const response2 = await axios.get(Utils.url("/api/v1/permissions"), {
				params: {
					where: JSON.stringify([["name", "=", "permission 8"]])
				}
			});
			expect(typeof response2.data).to.equal("object");
			expect(typeof response2.data.data).to.equal("object");
			expect(typeof response2.data.data.items).to.equal("object");
			expect(response2.data.data.items.length).to.equal(0);
			const response3 = await axios.get(Utils.url("/api/v1/permissions"), {
				params: {
					where: JSON.stringify([["name", "=", "permission 9"]])
				}
			});
			expect(typeof response3.data).to.equal("object");
			expect(typeof response3.data.data).to.equal("object");
			expect(typeof response3.data.data.items).to.equal("object");
			expect(response3.data.data.items.length).to.equal(1);
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.join> extension option", async function() {
		try {
			const response = await axios.get(Utils.url("/api/v1/users"));
			//expect(response.data.data.total).to.equal(18);
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.limit> option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.offset> option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.sort> option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.recursiveSelect> option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand <rest.deleteCascade> option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});


	

});