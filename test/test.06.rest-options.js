const {
	expect
} = require("chai");
const axios = require("axios");
const asynchandler = require("@allnulled/asynchandler");
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

	it("can understand <schema.{table}.rest.where> extension option", async function() {
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
			expect(typeof response4.data).to.equal("object");
			expect(typeof response4.data.data).to.equal("object");
			expect(typeof response4.data.data.item).to.equal("object");
			expect(response4.data.data.item).to.equal(null);
			const response5 = await axios.get(Utils.url("/api/v1/permissions/" + (id08 + 1)));
			expect(typeof response5.data).to.equal("object");
			expect(typeof response5.data.data).to.equal("object");
			expect(typeof response5.data.data.item).to.equal("object");
			expect(response5.data.data.item["permissions.id"]).to.equal(response3.data.data.items[0]["permissions.id"]);
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
			// @TODO: WHERE IN: UPDATE MANY
			// @TODO: WHERE IN: DELETE MANY
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.join> extension option", async function() {
		try {
			// EN "SELECT ONE":
			const responseGroup5 = await axios.get(Utils.url("/api/v1/groups/5"));
			expect(typeof responseGroup5.data).to.equal("object");
			expect(typeof responseGroup5.data.data).to.equal("object");
			expect(typeof responseGroup5.data.data.item).to.equal("object");
			expect(typeof responseGroup5.data.data.attachments).to.equal("object");
			expect(responseGroup5.data.data.attachments.length).to.equal(6);
			// EN "SELECT MANY":
			const responseGroup5_2 = await axios.get(Utils.url('/api/v1/groups?where=[["id","=",5]]'));
			expect(typeof responseGroup5_2.data.data).to.equal("object");
			expect(typeof responseGroup5_2.data).to.equal("object");
			expect(typeof responseGroup5_2.data.data).to.equal("object");
			expect(typeof responseGroup5_2.data.data.items).to.equal("object");
			expect(typeof responseGroup5_2.data.data.attachments).to.equal("object");
			expect(responseGroup5_2.data.data.total).to.equal(1);
			expect(responseGroup5_2.data.data.items[0]["groups.id"]).to.equal(5);
			expect(responseGroup5_2.data.data.attachments.length).to.equal(6);
			const responseGroup5_3 = await axios.get(Utils.url('/api/v1/groups?where=[["id",">",5], ["id","<",8]]'));
			expect(typeof responseGroup5_3.data.data).to.equal("object");
			expect(typeof responseGroup5_3.data).to.equal("object");
			expect(typeof responseGroup5_3.data.data).to.equal("object");
			expect(typeof responseGroup5_3.data.data.items).to.equal("object");
			expect(typeof responseGroup5_3.data.data.attachments).to.equal("object");
			expect(responseGroup5_3.data.data.total).to.equal(2);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.limit> option", async function() {
		try {
			// @TODO:
			const responseGaP = await axios.get(Utils.url('/api/v1/combo-group-and-permission'));
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data).to.equal("object");
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data.data.items).to.equal("object");
			expect(typeof responseGaP.data.data.attachments).to.equal("object");
			expect(responseGaP.data.data.items.length).to.equal(10);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.offset> option", async function() {
		try {
			const responseGaP = await axios.get(Utils.url('/api/v1/combo-group-and-permission'));
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data).to.equal("object");
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data.data.items).to.equal("object");
			expect(typeof responseGaP.data.data.attachments).to.equal("object");
			expect(responseGaP.data.data.items.length).to.equal(10);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id"]).to.not.equal(5);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id_permission"]).to.not.equal(2);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id"]).to.equal(6);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id_group"]).to.equal(5);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id_permission"]).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.sort> option", async function() {
		try {
			// @TODO:
			const responseGaP = await axios.get(Utils.url('/api/v1/combo-group-and-permission'));
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data).to.equal("object");
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data.data.items).to.equal("object");
			expect(typeof responseGaP.data.data.attachments).to.equal("object");
			expect(responseGaP.data.data.items.length).to.equal(10);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id"]).to.not.equal(1);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id"]).to.not.equal(2);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id"]).to.equal(6);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id_group"]).to.equal(5);
			expect(responseGaP.data.data.items[0]["combo_group_and_permission.id_permission"]).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.deleteCascade> option", async function() {
		try {
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
			/*
			const dataCombos1 = [{
				id_user:  5,
				id_group: 5,
			}, {
				id_user:  6,
				id_group: 5,
			}, {
				id_user:  15,
				id_group: 5,
			}, {
				id_user:  16,
				id_group: 5,
			}, {
				id_user:  2,
				id_group: 5,
			}, {
				id_user:  3,
				id_group: 5,
			}, {
				id_user:  5,
				id_group: 8,
			}, {
				id_user:  6,
				id_group: 8,
			}, {
				id_user:  15,
				id_group: 8,
			}, {
				id_user:  16,
				id_group: 8,
			}, {
				id_user:  2,
				id_group: 8,
			}, {
				id_user:  3,
				id_group: 8,
			}];
			const responseCombos1 = await axios.post(Utils.url("/api/v1/combo-user-and-group"), {
				data: dataCombos1
			});
			//*/
			// await axios.delete(Utils.url('/api/v1/group/1'))
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.recursiveSelect> option", async function() {
		try {
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.hiddenTables> option", async function() {
		try {
			let testifier = 0;
			try {
				const responseSessions = await axios.get(Utils.url('/api/v1/unconfirmed_users'));
			} catch(error) {
				testifier++;
			}
			expect(testifier).to.equal(1);
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
			// @TODO:
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.hiddenColumns> option", async function() {
		try {
			const insertUser = await new Promise(function(ok, fail) {
				cms.rest.connection.query("INSERT INTO users (name, password, email, full_name) VALUES ('username', 'password', 'email@domain.com', 'Username Surname');", asynchandler(ok, fail));
			});
			const getUser = await axios.get(Utils.url('/api/v1/users/' + insertUser.insertId));
			expect(typeof getUser.data.data.item).to.equal("object");
			expect(getUser.data.data.item["users.name"]).to.equal("username");
			expect(typeof getUser.data.data.item["users.password"]).to.equal("undefined");
		} catch (error) {
			throw error;
		}
	});

});