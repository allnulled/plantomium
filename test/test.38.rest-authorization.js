const axios = require("axios");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const {
	expect
} = require("chai");
const asynchandler = require("@allnulled/asynchandler");
const query = (q) => new Promise((ok, fail) => cms.rest.connection.query(q, asynchandler(ok, fail)));
const Utils = require(__dirname + "/utils.js");

describe("REST-AUTHORIZATION Test", function() {

	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");

	before(function() {
		//
	});

	after(function() {
		// 
	});

	let normalClient, adminClient;
	const tmp = {};

	skippable("can include authorization rules in vschema", function(done) {
		const permissionOnGet = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onGet", "require", "permissions", "0"], undefined);
		const permissionOnPost = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onPost", "require", "permissions", "0"], undefined);
		const permissionOnPut = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onPut", "require", "permissions", "0"], undefined);
		const permissionOnDelete = cms.utils.dataGetter(cms.schema, ["constraints", "groups", "auth", "onDelete", "require", "permissions", "0"], undefined);
		expect(permissionOnGet).to.equal("to administrate");
		expect(permissionOnPost).to.equal("to administrate");
		expect(permissionOnPut).to.equal("to administrate");
		expect(permissionOnDelete).to.equal("to administrate");
		done();
	});

	skippable("can login", async function() {
		try {
			const {
				confirmation_token
			} = await cms.auth.actors.register({
				name: "temporaryuser1",
				password: "password123",
				full_name: "Temporary User 1",
				email: "temporaryuser1@whatever.com",
			});
			const confirmation = await cms.auth.actors.confirm({
				confirmation_token
			});
			const {
				session_token
			} = await cms.auth.actors.login({
				name: "temporaryuser1",
				password: "password123"
			});
			const {
				session_token: session_token2
			} = await cms.auth.actors.login({
				name: "administrator",
				password: "admin123",
			})
			normalClient = axios.create();
			normalClient.defaults.headers.common.Authorization = "Bearer: " + session_token;
			adminClient = axios.create();
			adminClient.defaults.headers.common.Authorization = "Bearer: " + session_token2;
		} catch (error) {
			throw error;
		}
	});

	let idN = undefined;
	let idAdmin = undefined;

	skippable("can authorize postOne fields", async function() {
		try {
			const postOnePlantN = await normalClient.post(Utils.url("/api/v1/plant/0"), {
				name: 'five',
				name_scientific: 'five',
				name_popular: 'five',
				description: 'five',
				field_1: 5,
				field_2: 5,
				field_3: 5,
				field_4: 5,
				field_5: 5,
			});
			const postOnePlantAdmin = await adminClient.post(Utils.url("/api/v1/plant/0"), {
				name: 'six',
				name_scientific: 'six',
				name_popular: 'six',
				description: 'six',
				field_1: 6,
				field_2: 6,
				field_3: 6,
				field_4: 6,
				field_5: 6,
			});
			idN = postOnePlantN.data.data.operation.insertId;
			idAdmin = postOnePlantAdmin.data.data.operation.insertId;
			console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
			const getOnePlantN = await normalClient.get(Utils.url(`/api/v1/plant/${idN}`));
			console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
			console.log("Admin request.")
			const getOnePlantAdmin = await adminClient.get(Utils.url(`/api/v1/plant/${idAdmin}`));
			expect(typeof getOnePlantN.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_5")).to.equal(-1);
			expect(getOnePlantN.data.data.item["plant.field_1"]).to.equal(5);
			expect(getOnePlantN.data.data.item["plant.field_2"]).to.equal(5);
			expect(getOnePlantN.data.data.item["plant.field_3"]).to.equal(5);
			expect(getOnePlantN.data.data.item["plant.field_4"]).to.equal(null);
			expect(getOnePlantN.data.data.item["plant.field_5"]).to.equal(undefined);
			expect(typeof getOnePlantAdmin.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_5")).to.not.equal(-1);
			expect(getOnePlantAdmin.data.data.item["plant.field_1"]).to.equal(6);
			expect(getOnePlantAdmin.data.data.item["plant.field_2"]).to.equal(6);
			expect(getOnePlantAdmin.data.data.item["plant.field_3"]).to.equal(6);
			expect(getOnePlantAdmin.data.data.item["plant.field_4"]).to.equal(6);
			expect(getOnePlantAdmin.data.data.item["plant.field_5"]).to.equal(6);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize getMany wheres", async function() {
		try {
			const getManyPlantsN = await normalClient.get(Utils.url("/api/v1/plant"), {
				params: {
					where: JSON.stringify([
						["field_5", "!=", 6]
					])
				}
			});
			const getManyPlantsAdmin = await adminClient.get(Utils.url("/api/v1/plant"), {
				params: {
					where: JSON.stringify([
						["field_5", "!=", 6]
					])
				}
			});
			const plantsN = getManyPlantsN.data.data.items.length;
			const plantsAdmin = getManyPlantsAdmin.data.data.items.length;
			expect(plantsN > plantsAdmin).to.equal(true);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize getMany fields", async function() {
		try {
			const manyGroupsN = await normalClient.get(Utils.url("/api/v1/groups"));
			const manyGroupsAdmin = await adminClient.get(Utils.url("/api/v1/groups"));
			expect(typeof manyGroupsN.data).to.equal("object");
			expect(typeof manyGroupsN.data.data).to.equal("object");
			expect(typeof manyGroupsN.data.data.items).to.equal("object");
			expect(manyGroupsN.data.data.items.length).to.not.equal(0);
			expect(typeof manyGroupsAdmin.data).to.equal("object");
			expect(typeof manyGroupsAdmin.data.data).to.equal("object");
			expect(typeof manyGroupsAdmin.data.data.items).to.equal("object");
			expect(manyGroupsAdmin.data.data.items.length).to.not.equal(0);
			tmp.groupId = manyGroupsAdmin.data.data.items[0]["groups.id"];
			const propsN = Object.keys(manyGroupsN.data.data.items[0]).length;
			const propsAdmin = Object.keys(manyGroupsAdmin.data.data.items[0]).length;
			expect(propsN + 1).to.equal(propsAdmin);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize getOne fields", async function() {
		try {
			const oneGroupN = await normalClient.get(Utils.url("/api/v1/groups/" + tmp.groupId));
			const oneGroupAdmin = await adminClient.get(Utils.url("/api/v1/groups/" + tmp.groupId));
			expect(typeof oneGroupN.data).to.equal("object");
			expect(typeof oneGroupN.data.data).to.equal("object");
			expect(typeof oneGroupN.data.data.item).to.equal("object");
			const propsN = Object.keys(oneGroupN.data.data.item).length;
			expect(typeof oneGroupAdmin.data).to.equal("object");
			expect(typeof oneGroupAdmin.data.data).to.equal("object");
			expect(typeof oneGroupAdmin.data.data.item).to.equal("object");
			const propsAdmin = Object.keys(oneGroupAdmin.data.data.item).length;
			expect(propsN + 1).to.equal(propsAdmin);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize postMany fields", async function() {
		try {
			const postManyPlantsN = await normalClient.post(Utils.url("/api/v1/plant"), {
				data: [{
					name: 'one',
					name_scientific: 'one',
					name_popular: 'one',
					description: 'one',
					field_1: 1,
					field_2: 1,
					field_3: 1,
					field_4: 1,
					field_5: 1,
				}, {
					name: 'two',
					name_scientific: 'two',
					name_popular: 'two',
					description: 'two',
					field_1: 2,
					field_2: 2,
					field_3: 2,
					field_4: 2,
					field_5: 2,
				}]
			});
			const postManyPlantsAdmin = await adminClient.post(Utils.url("/api/v1/plant"), {
				data: [{
					name: 'three',
					name_scientific: 'three',
					name_popular: 'three',
					description: 'three',
					field_1: 3,
					field_2: 3,
					field_3: 3,
					field_4: 3,
					field_5: 3,
				}, {
					name: 'four',
					name_scientific: 'four',
					name_popular: 'four',
					description: 'four',
					field_1: 4,
					field_2: 4,
					field_3: 4,
					field_4: 4,
					field_5: 4,
				}]
			});
			const idN = postManyPlantsN.data.data.operation.insertId;
			const idAdmin = postManyPlantsAdmin.data.data.operation.insertId;
			const getOnePlantN = await normalClient.get(Utils.url(`/api/v1/plant/${idN}`));
			const getOnePlantAdmin = await adminClient.get(Utils.url(`/api/v1/plant/${idAdmin}`));
			expect(typeof getOnePlantN.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_5")).to.equal(-1);
			expect(getOnePlantN.data.data.item["plant.field_1"]).to.equal(1);
			expect(getOnePlantN.data.data.item["plant.field_2"]).to.equal(1);
			expect(getOnePlantN.data.data.item["plant.field_3"]).to.equal(1);
			expect(getOnePlantN.data.data.item["plant.field_4"]).to.equal(null);
			expect(getOnePlantN.data.data.item["plant.field_5"]).to.equal(undefined);
			expect(typeof getOnePlantAdmin.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_5")).to.not.equal(-1);
			expect(getOnePlantAdmin.data.data.item["plant.field_1"]).to.equal(3);
			expect(getOnePlantAdmin.data.data.item["plant.field_2"]).to.equal(3);
			expect(getOnePlantAdmin.data.data.item["plant.field_3"]).to.equal(3);
			expect(getOnePlantAdmin.data.data.item["plant.field_4"]).to.equal(3);
			expect(getOnePlantAdmin.data.data.item["plant.field_5"]).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize putMany fields", async function() {
		try {
			const putManyPlantsN = await normalClient.put(Utils.url("/api/v1/plant"), {
				where: [
					["id", "=", idN]
				],
				data: {
					name: 'ten',
					name_scientific: 'ten',
					name_popular: 'ten',
					description: 'ten',
					field_1: 10,
					field_2: 10,
					field_3: 10,
					field_4: 10,
					field_5: 10,
				}
			});
			const getOnePlantN = await normalClient.get(Utils.url(`/api/v1/plant/${idN}`));
			expect(typeof getOnePlantN.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantN.data.data.item).indexOf("plant.field_5")).to.equal(-1);
			expect(getOnePlantN.data.data.item["plant.field_1"]).to.equal(10);
			expect(getOnePlantN.data.data.item["plant.field_2"]).to.equal(10);
			expect(getOnePlantN.data.data.item["plant.field_3"]).to.equal(10);
			expect(getOnePlantN.data.data.item["plant.field_4"]).to.equal(null);
			expect(getOnePlantN.data.data.item["plant.field_5"]).to.equal(undefined);
			const putManyPlantsAdmin = await adminClient.put(Utils.url("/api/v1/plant"), {
				where: [
					["id", "=", idAdmin]
				],
				data: {
					name: 'eleven',
					name_scientific: 'eleven',
					name_popular: 'eleven',
					description: 'eleven',
					field_1: 11,
					field_2: 11,
					field_3: 11,
					field_4: 11,
					field_5: 11,
				}
			});
			const getManyPlantsAdmin2 = await adminClient.get(Utils.url("/api/v1/plant"), {
				params: {
					where: JSON.stringify([
						["id", "=", idN]
					])
				}
			});
			const getOnePlantAdmin = await adminClient.get(Utils.url(`/api/v1/plant/${idAdmin}`));
			expect(typeof getOnePlantAdmin.data.data.item).to.equal("object");
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getOnePlantAdmin.data.data.item).indexOf("plant.field_5")).to.not.equal(-1);
			expect(getOnePlantAdmin.data.data.item["plant.field_1"]).to.equal(11);
			expect(getOnePlantAdmin.data.data.item["plant.field_2"]).to.equal(11);
			expect(getOnePlantAdmin.data.data.item["plant.field_3"]).to.equal(11);
			expect(getOnePlantAdmin.data.data.item["plant.field_4"]).to.equal(11);
			expect(getOnePlantAdmin.data.data.item["plant.field_5"]).to.equal(11);
			expect(typeof getManyPlantsAdmin2.data.data.items).to.equal("object");
			expect(getManyPlantsAdmin2.data.data.items.length).to.not.equal(0);
			expect(Object.keys(getManyPlantsAdmin2.data.data.items[0]).indexOf("plant.field_1")).to.not.equal(-1);
			expect(Object.keys(getManyPlantsAdmin2.data.data.items[0]).indexOf("plant.field_2")).to.not.equal(-1);
			expect(Object.keys(getManyPlantsAdmin2.data.data.items[0]).indexOf("plant.field_3")).to.not.equal(-1);
			expect(Object.keys(getManyPlantsAdmin2.data.data.items[0]).indexOf("plant.field_4")).to.not.equal(-1);
			expect(Object.keys(getManyPlantsAdmin2.data.data.items[0]).indexOf("plant.field_5")).to.not.equal(-1);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize putOne fields", async function() {
		try {
			await normalClient.put(Utils.url(`/api/v1/plant/${idN}`), {
				name: 'twelve',
				name_scientific: 'twelve',
				name_popular: 'twelve',
				description: 'twelve',
				field_1: 12,
				field_2: 12,
				field_3: 12,
				field_4: 12,
				field_5: 12,
			});
			await adminClient.put(Utils.url(`/api/v1/plant/${idAdmin}`), {
				name: 'thirteen',
				name_scientific: 'thirteen',
				name_popular: 'thirteen',
				description: 'thirteen',
				field_1: 13,
				field_2: 13,
				field_3: 13,
				field_4: 13,
				field_5: 13,
			});
			const putOneN = await normalClient.get(Utils.url(`/api/v1/plant/${idN}`));
			const putOneAdmin = await adminClient.get(Utils.url(`/api/v1/plant/${idAdmin}`));
			expect(putOneN.data.data.item["plant.field_1"]).to.equal(12);
			expect("plant.field_5" in putOneN.data.data.item).to.equal(false);
			expect(putOneAdmin.data.data.item["plant.field_1"]).to.equal(13);
			expect("plant.field_5" in putOneAdmin.data.data.item).to.equal(true);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize attachment fields and wheres", async function() {
		try {
			// @TODO:
			await adminClient.post(Utils.url(`/api/v1/plant-details`), {
				data: [{
					id_plant: idN,
					description: "Details of the plant 1"
				}, {
					id_plant: idAdmin,
					description: "Details of the plant 2"
				}]
			});
			const getOnePlantN = await normalClient.get(Utils.url(`/api/v1/plant/${idN}`));
			const getOnePlantAdmin = await adminClient.get(Utils.url(`/api/v1/plant/${idAdmin}`));
			expect("plant_details.description" in getOnePlantN.data.data.attachments[0]).to.equal(false);
			expect("plant_details.description" in getOnePlantAdmin.data.data.attachments[0]).to.equal(true);
			const getOnePlantWhereN = await normalClient.get(Utils.url(`/api/v1/plant-details`), {
				params: {
					where: JSON.stringify([
						["description", "=", "Details of the plant 2"]
					])
				}
			});
			const getOnePlantWhereAdmin = await adminClient.get(Utils.url(`/api/v1/plant-details`), {
				params: {
					where: JSON.stringify([
						["description", "=", "Details of the plant 2"]
					])
				}
			});
			expect(getOnePlantWhereN.data.data.items.length > getOnePlantWhereAdmin.data.data.items.length).to.equal(true);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize putMany wheres", async function() {
		try {
			const putManyAdmin = await adminClient.put(Utils.url(`/api/v1/plant-details`), {
				where: [
					["description", "=", "Details of the plant 2"]
				],
				data: {
					description: 'one updated',
				}
			});
			expect(putManyAdmin.data.data.operation.affectedRows).to.equal(1);
			let accepted = false;
			let putManyN = undefined;
			try {
				putManyN = await normalClient.put(Utils.url(`/api/v1/plant-details`), {
					where: [
						["description", "=", "one updated"]
					],
					data: {
						description: 'all updated',
					}
				});
			} catch(error) {
				
			}
			expect(putManyN.data.error.message.indexOf("640")).to.not.equal(-1);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize putMany data", async function() {
		try {
			const putManyN = await normalClient.put(Utils.url(`/api/v1/plant`), {
				where: [
					["id", ">", 0]
				],
				data: {
					description: 'all updated',
				}
			});
			expect(typeof putManyN.data.error).to.equal("object");
			const putManyN2 = await normalClient.put(Utils.url(`/api/v1/plant`), {
				where: [
					["id", ">", 0],
					["id", "<", 2]
				],
				data: {
					field_1: 47,
				}
			});
			expect(typeof putManyN2.data.data).to.equal("object");
			expect(putManyN2.data.data.operation.affectedRows).to.not.equal(0);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize get table", async function() {
		try {
			adminClient.post(Utils.url(`/api/v1/trait`), {
				data: [
					{name: "trait 1", description: "description of trait 1"},
					{name: "trait 2", description: "description of trait 2"},
					{name: "trait 3", description: "description of trait 3"},
					{name: "trait 4", description: "description of trait 4"},
					{name: "trait 5", description: "description of trait 5"},
					{name: "trait 6", description: "description of trait 6"},
					{name: "trait 7", description: "description of trait 7"},
					{name: "trait 8", description: "description of trait 8"},
					{name: "trait 9", description: "description of trait 9"},
					{name: "trait 10", description: "description of trait 10"},
				]
			});
			adminClient.post(Utils.url(`/api/v1/trait-details`), {
				data: [
					{id_trait: 1, details: "details of trait 1"},
					{id_trait: 2, details: "details of trait 2"},
					{id_trait: 3, details: "details of trait 3"},
					{id_trait: 4, details: "details of trait 4"},
					{id_trait: 5, details: "details of trait 5"},
					{id_trait: 6, details: "details of trait 6"},
					{id_trait: 7, details: "details of trait 7"},
					{id_trait: 8, details: "details of trait 8"},
					{id_trait: 9, details: "details of trait 9"},
					{id_trait: 10, details: "details of trait 10"},
				]
			});
			adminClient.post(Utils.url(`/api/v1/trait-secret-details`), {
				data: [
					{id_trait: 1, details: "secret details of trait 1"},
					{id_trait: 2, details: "secret details of trait 2"},
					{id_trait: 3, details: "secret details of trait 3"},
					{id_trait: 4, details: "secret details of trait 4"},
					{id_trait: 5, details: "secret details of trait 5"},
					{id_trait: 6, details: "secret details of trait 6"},
					{id_trait: 7, details: "secret details of trait 7"},
					{id_trait: 8, details: "secret details of trait 8"},
					{id_trait: 9, details: "secret details of trait 9"},
					{id_trait: 10, details: "secret details of trait 10"},
				]
			});
			const getTraitN = await normalClient.get(Utils.url(`/api/v1/trait-secret-details`));
			const getTraitAdmin = await adminClient.get(Utils.url(`/api/v1/trait-secret-details`));
			expect(typeof getTraitN.data.error).to.equal("object")
			expect(typeof getTraitAdmin.data.data).to.equal("object")
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize get table by attachments", async function() {
		try {
			const getTraitN = await normalClient.get(Utils.url(`/api/v1/trait`));
			const getTraitAdmin = await adminClient.get(Utils.url(`/api/v1/trait`));
			const attachmentsN = Object.keys(getTraitN.data.data.attachments[0])
			const attachmentsAdmin = Object.keys(getTraitAdmin.data.data.attachments[0])
			expect(attachmentsN.length < attachmentsAdmin.length).to.equal(true);
			expect(attachmentsN.indexOf("trait_secret_details.id")).to.equal(-1);
			expect(attachmentsAdmin.indexOf("trait_secret_details.id")).to.not.equal(-1);
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize post table", async function() {
		try {
			const postTraitSecretDetailsN = await normalClient.post(Utils.url(`/api/v1/trait-secret-details`), {
				data: [
					{id_trait: 1, details: "secret details of trait 1"}
				]
			});
			expect(postTraitSecretDetailsN.data.data.operation).to.equal(null)
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize put table", async function() {
		try {
			const postTraitSecretDetailsAdmin = await adminClient.post(Utils.url(`/api/v1/trait-secret-details`), {
				data: [
					{id_trait: 1, details: "secret details of trait 1 (original)"}
				]
			});
			const id = postTraitSecretDetailsAdmin.data.data.operation.insertId;
			const putTraitSecretDetailsN = await normalClient.put(Utils.url(`/api/v1/trait-secret-details/${id}`), {
				data: [
					{id_trait: 1, details: "secret details of trait 1"}
				]
			});
			expect(typeof putTraitSecretDetailsN.data.error).to.equal("object")
			const putTraitSecretDetailsAdmin = await adminClient.put(Utils.url(`/api/v1/trait-secret-details/${id}`), {
				id_trait: 1, details: "secret details of trait 1"
			});
			expect(putTraitSecretDetailsAdmin.data.data.operation.affectedRows).to.equal(1)
		} catch (error) {
			throw error;
		}
	});

	skippable("can authorize delete table", async function() {
		try {
			const postTraitSecretDetailsAdmin = await adminClient.post(Utils.url(`/api/v1/trait-secret-details`), {
				data: [
					{id_trait: 1, details: "secret details of trait 1 (volatile)"}
				]
			});
			const id = postTraitSecretDetailsAdmin.data.data.operation.insertId;
			const deleteTraitSecretDetailsN = await normalClient.delete(Utils.url(`/api/v1/trait-secret-details/${id}`));
			const deleteTraitSecretDetailsAdmin = await adminClient.delete(Utils.url(`/api/v1/trait-secret-details/${id}`));
			expect(typeof deleteTraitSecretDetailsN.data.error).to.equal("object")
			expect(typeof deleteTraitSecretDetailsAdmin.data.data).to.equal("object")
		} catch (error) {
			throw error;
		}
	});



});