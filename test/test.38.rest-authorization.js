const axios = require("axios");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const { expect } = require("chai");
const asynchandler = require("@allnulled/asynchandler");
const query = (q) => new Promise((ok, fail) => cms.rest.connection.query(q, asynchandler(ok, fail)));
const Utils = require(__dirname + "/utils.js");

describe("REST-AUTHORIZATION Test", function() {
	
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	let normalClient, adminClient;
	const tmp = {};

	it("can include authorization rules in vschema", function(done) {
		const permissionOnGet = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onGet", "require", "permissions", "0"], undefined);
		const permissionOnPost = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onPost", "require", "permissions", "0"], undefined);
		const permissionOnPut = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onPut", "require", "permissions", "0"], undefined);
		const permissionOnDelete = cms.utils.dataGetter(cms.schema, ["columns", "groups", "description", "auth", "onDelete", "require", "permissions", "0"], undefined);
		expect(permissionOnGet).to.equal("to administrate");
		expect(permissionOnPost).to.equal("to administrate");
		expect(permissionOnPut).to.equal("to administrate");
		expect(permissionOnDelete).to.equal("to administrate");
		done();
	});

	it("can login", async function() {
		try {
			const {confirmation_token} = await cms.auth.actors.register({
				name: "temporaryuser1",
				password: "password123",
				full_name: "Temporary User 1",
				email: "temporaryuser1@whatever.com",
			});
			const confirmation = await cms.auth.actors.confirm({confirmation_token});
			const {session_token} = await cms.auth.actors.login({
				name: "temporaryuser1",
				password: "password123"
			});
			const {session_token: session_token2} = await cms.auth.actors.login({
				name: "administrator",
				password: "admin123",
			})
			normalClient = axios.create();
			normalClient.defaults.headers.common.Authorization = "Bearer: " + session_token;
			adminClient = axios.create();
			adminClient.defaults.headers.common.Authorization = "Bearer: " + session_token2;
		} catch(error) {
			throw error;
		}
	});

	it("can authorize getMany fields", async function() {
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
			expect(propsN+1).to.equal(propsAdmin);
		} catch(error) {
			throw error;
		}
	});

	it("can authorize getOne fields", async function() {
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
			expect(propsN+1).to.equal(propsAdmin);
		} catch(error) {
			throw error;
		}
	});

	it("can authorize postMany fields", async function() {
		try {
			const postManyPlants = await normalClient.post(Utils.url("/api/v1/plant"), {
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
				}, {
					name: 'three',
					name_scientific: 'three',
					name_popular: 'three',
					description: 'three',
					field_1: 3,
					field_2: 3,
					field_3: 3,
					field_4: 3,
					field_5: 3,
				}]
			});
		} catch(error) {
			throw error;
		}
	});

});