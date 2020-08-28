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
			const items = 20;
			
			// permissions:
			const dataPermissions = [];
			for (let index = 0; index < items; index++) {
				dataPermissions.push({
					name: "permission " + index
				});
			}
			const responsePermissions = await axios.post(Utils.url("/api/v1/permissions"), {
				data: dataPermissions
			});
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data.affectedRows).to.equal(items);

			// groups:
			const dataGroups = [];
			for (let index = 0; index < items; index++) {
				dataGroups.push({
					name: "group " + index
				});
			}
			const responseGroups = await axios.post(Utils.url("/api/v1/groups"), {
				data: dataGroups
			});
			expect(typeof responseGroups.data.data).to.equal("object");
			expect(responseGroups.data.data.affectedRows).to.equal(items);
			// permission_and_group:
			const dataCombos1 = [{
				id_group: 5,
				id_permission: 5
			}, {
				id_group: 5,
				id_permission: 6
			}, {
				id_group: 5,
				id_permission: 15
			}, {
				id_group: 5,
				id_permission: 16
			}, {
				id_group: 5,
				id_permission: 2
			}, {
				id_group: 5,
				id_permission: 3
			}, {
				id_group: 8,
				id_permission: 5
			}, {
				id_group: 8,
				id_permission: 6
			}, {
				id_group: 8,
				id_permission: 15
			}, {
				id_group: 8,
				id_permission: 16
			}, {
				id_group: 8,
				id_permission: 2
			}, {
				id_group: 8,
				id_permission: 3
			}];
			const responseCombos1 = await axios.post(Utils.url("/api/v1/combo-group-and-permission"), {
				data: dataCombos1
			});
			expect(typeof responseCombos1.data.data).to.equal("object");
			expect(responseCombos1.data.data.affectedRows).to.equal(dataCombos1.length);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.where> extension option", async function() {
		try {
			// SELECT MANY:
			const response = await axios.get(Utils.url("/api/v1/permissions"));
			expect(response.data.data.total).to.equal(18);
			const response2 = await axios.get(Utils.url("/api/v1/permissions"), {
				params: {
					where: JSON.stringify([
						["name", "=", "permission 8"]
					])
				}
			});
			expect(typeof response2.data).to.equal("object");
			expect(typeof response2.data.data).to.equal("object");
			expect(typeof response2.data.data.items).to.equal("object");
			expect(response2.data.data.items.length).to.equal(0);
			const response3 = await axios.get(Utils.url("/api/v1/permissions"), {
				params: {
					where: JSON.stringify([
						["name", "=", "permission 9"]
					])
				}
			});
			expect(typeof response3.data).to.equal("object");
			expect(typeof response3.data.data).to.equal("object");
			expect(typeof response3.data.data.items).to.equal("object");
			expect(response3.data.data.items.length).to.equal(1);
			// SELECT ONE:
			const id08 = parseInt(response3.data.data.items[0]["permissions.id"]) - 1;
			const response4 = await axios.get(Utils.url("/api/v1/permissions/" + id08));
			expect(response4.data.data).to.equal(null);
			const response5 = await axios.get(Utils.url("/api/v1/permissions/" + (id08 + 1)));
			expect(response5.data.data["permissions.id"]).to.equal(response3.data.data.items[0]["permissions.id"]);
			// UPDATE ONE:
			const response6 = await axios.put(Utils.url("/api/v1/permissions/" + id08), {
				name: "modified name"
			});
			expect(response6.data.data.affectedRows).to.equal(0);
			const response7 = await axios.put(Utils.url("/api/v1/permissions/" + (id08 + 1)), {
				name: "modified name 1"
			});
			expect(response7.data.data.affectedRows).to.equal(1);
			// DELETE ONE:
			const response8 = await axios.delete(Utils.url("/api/v1/permissions/" + id08));
			expect(response8.data.data).to.equal(null);
			const response9 = await axios.delete(Utils.url("/api/v1/permissions/" + (id08 + 1)));
			expect(response9.data.data["permissions.id"]).to.equal(response3.data.data.items[0]["permissions.id"]);
			// @TODO: UPDATE MANY
			// @TODO: DELETE MANY
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.join> extension option", async function() {
		try {
			const responseGroup5 = await axios.get(Utils.url("/api/v1/groups/5"));
			// expect(responseGroup5.data).to.equal(20);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.limit> option", async function() {
		try {
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.offset> option", async function() {
		try {
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.sort> option", async function() {
		try {
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.recursiveSelect> option", async function() {
		try {
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <rest.deleteCascade> option", async function() {
		try {
			// @TODO:
		} catch (error) {
			throw error;
		}
	});



});