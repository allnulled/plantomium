const {
	expect
} = require("chai");
const axios = require("axios");
const asynchandler = require("@allnulled/asynchandler");
const fs = require("fs");
const FormData = require("form-data");
const cms = require(__dirname + "/../src/cms.js");
const Utils = require(__dirname + "/utils.js");

describe("REST Test (options)", function() {

	this.timeout(10 * 1000);
	
	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");
	let axiosInstance = undefined;

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
			const responsePermissions = await axiosInstance.post(Utils.url("/api/v1/permissions"), {
				data: dataPermissions
			});
			expect(typeof responsePermissions.data.data).to.equal("object");
			expect(responsePermissions.data.data.operation.affectedRows).to.equal(items);

			// groups:
			const dataGroups = [];
			for (let index = 0; index < items; index++) {
				dataGroups.push({
					name: "group " + index
				});
			}
			const responseGroups = await axiosInstance.post(Utils.url("/api/v1/groups"), {
				data: dataGroups
			});
			expect(typeof responseGroups.data.data).to.equal("object");
			expect(responseGroups.data.data.operation.affectedRows).to.equal(items);
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
				id_permission: 1
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
				id_permission: 1
			}, {
				id_group: 8,
				id_permission: 3
			}];
			const responseCombos1 = await axiosInstance.post(Utils.url("/api/v1/combo-group-and-permission"), {
				data: dataCombos1
			});
			expect(typeof responseCombos1.data.data).to.equal("object");
			expect(responseCombos1.data.data.operation.affectedRows).to.equal(dataCombos1.length);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.where> extension option", async function() {
		try {
			// SELECT MANY:
			const response = await axiosInstance.get(Utils.url("/api/v1/permissions"));
			expect(response.data.data.total).to.equal(19);
			const response2 = await axiosInstance.get(Utils.url("/api/v1/permissions"), {
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
			const response3 = await axiosInstance.get(Utils.url("/api/v1/permissions"), {
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
			const response4 = await axiosInstance.get(Utils.url("/api/v1/permissions/" + id08));
			expect(typeof response4.data).to.equal("object");
			expect(typeof response4.data.data).to.equal("object");
			expect(typeof response4.data.data.item).to.equal("object");
			expect(response4.data.data.item).to.equal(null);
			const response5 = await axiosInstance.get(Utils.url("/api/v1/permissions/" + (id08 + 1)));
			expect(typeof response5.data).to.equal("object");
			expect(typeof response5.data.data).to.equal("object");
			expect(typeof response5.data.data.item).to.equal("object");
			expect(response5.data.data.item["permissions.id"]).to.equal(response3.data.data.items[0]["permissions.id"]);
			// UPDATE ONE:
			const response6 = await axiosInstance.put(Utils.url("/api/v1/permissions/" + id08), {
				name: "modified name"
			});
			expect(response6.data.data.operation.affectedRows).to.equal(0);
			const response7 = await axiosInstance.put(Utils.url("/api/v1/permissions/" + (id08 + 1)), {
				name: "modified name 1"
			});
			expect(response7.data.data.operation.affectedRows).to.equal(1);
			// DELETE ONE:
			const response8 = await axiosInstance.delete(Utils.url("/api/v1/permissions/" + id08));
			expect(response8.data.data.item).to.equal(null);
			const response9 = await axiosInstance.delete(Utils.url("/api/v1/permissions/" + (id08 + 1)));
			expect(response9.data.data.item["permissions.id"]).to.equal(response3.data.data.items[0]["permissions.id"]);
			// @TODO: WHERE IN: UPDATE MANY
			// @TODO: WHERE IN: DELETE MANY
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.join> extension option", async function() {
		try {
			// EN "SELECT ONE":
			const responseGroup5 = await axiosInstance.get(Utils.url("/api/v1/groups/5"));
			expect(typeof responseGroup5.data).to.equal("object");
			expect(typeof responseGroup5.data.data).to.equal("object");
			expect(typeof responseGroup5.data.data.item).to.equal("object");
			expect(typeof responseGroup5.data.data.attachments).to.equal("object");
			expect(responseGroup5.data.data.attachments.length).to.equal(6);
			// EN "SELECT MANY":
			const responseGroup5_2 = await axiosInstance.get(Utils.url('/api/v1/groups?where=[["id","=",5]]'));
			expect(typeof responseGroup5_2.data.data).to.equal("object");
			expect(typeof responseGroup5_2.data).to.equal("object");
			expect(typeof responseGroup5_2.data.data).to.equal("object");
			expect(typeof responseGroup5_2.data.data.items).to.equal("object");
			expect(typeof responseGroup5_2.data.data.attachments).to.equal("object");
			expect(responseGroup5_2.data.data.total).to.equal(1);
			expect(responseGroup5_2.data.data.items[0]["groups.id"]).to.equal(5);
			expect(responseGroup5_2.data.data.attachments.length).to.equal(6);
			const responseGroup5_3 = await axiosInstance.get(Utils.url('/api/v1/groups?where=[["id",">",5], ["id","<",8]]'));
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
			const responseGaP = await axiosInstance.get(Utils.url('/api/v1/combo-group-and-permission'));
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
			const responseGaP = await axiosInstance.get(Utils.url('/api/v1/combo-group-and-permission'));
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data).to.equal("object");
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data.data.items).to.equal("object");
			expect(typeof responseGaP.data.data.attachments).to.equal("object");
			expect(responseGaP.data.data.items.length).to.equal(10);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id"]).to.not.equal(5);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id_permission"]).to.not.equal(2);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id"]).to.equal(7);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id_group"]).to.equal(5);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id_permission"]).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.sort> option", async function() {
		try {
			// @TODO:
			const responseGaP = await axiosInstance.get(Utils.url('/api/v1/combo-group-and-permission'));
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data).to.equal("object");
			expect(typeof responseGaP.data.data).to.equal("object");
			expect(typeof responseGaP.data.data.items).to.equal("object");
			expect(typeof responseGaP.data.data.attachments).to.equal("object");
			expect(responseGaP.data.data.items.length).to.equal(10);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id"]).to.not.equal(1);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id"]).to.not.equal(2);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id"]).to.equal(7);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id_group"]).to.equal(5);
			expect(responseGaP.data.data.items[1]["combo_group_and_permission.id_permission"]).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.hiddenTables> option", async function() {
		try {
			let testifier = 0;
			try {
				const responseSessions = await axiosInstance.get(Utils.url('/api/v1/unconfirmed_users'));
			} catch(error) {
				testifier++;
			}
			expect(testifier).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.hiddenColumns> option", async function() {
		try {
			const insertUser = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO users (name, password, email, full_name) VALUES ('username', 'password', 'email@domain.com', 'Username Surname');", asynchandler(ok, fail)));
			const getUser = await axiosInstance.get(Utils.url('/api/v1/users/' + insertUser.insertId));
			expect(typeof getUser.data.data.item).to.equal("object");
			expect(getUser.data.data.item["users.name"]).to.equal("username");
			expect(typeof getUser.data.data.item["users.password"]).to.equal("undefined");
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.cascadeDelete> option", async function() {
		try {
			const selectUserAndGroup = await new Promise((ok, fail) => cms.rest.connection.query("SELECT * FROM combo_user_and_group;", asynchandler(ok, fail)));
			const selectUserAndPermission = await new Promise((ok, fail) => cms.rest.connection.query("SELECT * FROM combo_user_and_permission;", asynchandler(ok, fail)));
			const selectGroupAndPermission = await new Promise((ok, fail) => cms.rest.connection.query("SELECT * FROM combo_group_and_permission;", asynchandler(ok, fail)));
			const insertUser = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO users (name, password, email, full_name) VALUES ('username2', 'password2', 'email2@domain2.com', 'Username Surname 2');", asynchandler(ok, fail)));
			const userId = insertUser.insertId;
			const insertPermission1 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO permissions (name) VALUES ('permission per user 1');", asynchandler(ok, fail)));
			const insertPermission2 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO permissions (name) VALUES ('permission per user 2');", asynchandler(ok, fail)));
			const insertPermission3 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO permissions (name) VALUES ('permission per user 3');", asynchandler(ok, fail)));
			const insertUserPermission1 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_permission (id_user, id_permission) VALUES (${userId}, ${insertPermission1.insertId});`, asynchandler(ok, fail)));
			const insertUserPermission2 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_permission (id_user, id_permission) VALUES (${userId}, ${insertPermission2.insertId});`, asynchandler(ok, fail)));
			const insertUserPermission3 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_permission (id_user, id_permission) VALUES (${userId}, ${insertPermission3.insertId});`, asynchandler(ok, fail)));
			const insertGroup1 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO groups (name) VALUES ('group per user 1');", asynchandler(ok, fail)));
			const insertGroup2 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO groups (name) VALUES ('group per user 2');", asynchandler(ok, fail)));
			const insertGroup3 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO groups (name) VALUES ('group per user 3');", asynchandler(ok, fail)));
			const insertUserGroup1 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_group (id_user, id_group) VALUES (${userId}, ${insertGroup1.insertId});`, asynchandler(ok, fail)));
			const insertUserGroup2 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_group (id_user, id_group) VALUES (${userId}, ${insertGroup2.insertId});`, asynchandler(ok, fail)));
			const insertUserGroup3 = await new Promise((ok, fail) => cms.rest.connection.query(`INSERT INTO combo_user_and_group (id_user, id_group) VALUES (${userId}, ${insertGroup3.insertId});`, asynchandler(ok, fail)));
			// attachments still exist:
			const comboUserAndPermissionResponse1 = await axiosInstance.get(Utils.url(`/api/v1/combo-user-and-permission?where=[["id_user", "=", "${userId}"]]`));
			const comboUserAndGroupResponse1 = await axiosInstance.get(Utils.url(`/api/v1/combo-user-and-group?where=[["id_user", "=", "${userId}"]]`));
			expect(comboUserAndPermissionResponse1.data.data.total).to.equal(3);
			expect(comboUserAndGroupResponse1.data.data.total).to.equal(3);
			const deleteUser = await axiosInstance.delete(Utils.url(`/api/v1/users/${userId}`));
			const comboUserAndPermissionResponse2 = await axiosInstance.get(Utils.url(`/api/v1/combo-user-and-permission?where=[["id_user", "=", "${userId}"]]`));
			const comboUserAndGroupResponse2 = await axiosInstance.get(Utils.url(`/api/v1/combo-user-and-group?where=[["id_user", "=", "${userId}"]]`));
			// attachments dont exist anymore:
			expect(comboUserAndPermissionResponse2.data.data.total).to.equal(0);
			expect(comboUserAndGroupResponse2.data.data.total).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

	it("can understand <schema.{table}.rest.tree> option", async function() {
		try {
			const insertNode1 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/', 'branch', null);", asynchandler(ok, fail)));
			const insertNode2 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 1', 'branch', null);", asynchandler(ok, fail)));
			const insertNode3 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 1/file 1.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode4 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 1/file 2.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode5 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 1/file 3.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode6 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 2', 'branch', null);", asynchandler(ok, fail)));
			const insertNode7 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 2/file 4.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode8 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 2/file 5.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode9 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 2/file 6.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode10 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 3', 'branch', null);", asynchandler(ok, fail)));
			const insertNode11 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 3/file 7.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode12 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 3/file 8.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const insertNode13 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/folder 3/file 9.txt', 'leaf', '...');", asynchandler(ok, fail)));
			const getRoot = await axiosInstance.get(Utils.url(`/api/v1/filesystem/${insertNode1.insertId}`));
			const getFolder1 = await axiosInstance.get(Utils.url(`/api/v1/filesystem/${insertNode2.insertId}`));
			const getFolder2 = await axiosInstance.get(Utils.url(`/api/v1/filesystem/${insertNode6.insertId}`));
			const getFolder3 = await axiosInstance.get(Utils.url(`/api/v1/filesystem/${insertNode10.insertId}`));
			expect(getRoot.data.data.children.length).to.equal(3);
			expect(getFolder1.data.data.children.length).to.equal(3);
			expect(getFolder2.data.data.children.length).to.equal(3);
			expect(getFolder3.data.data.children.length).to.equal(3);
		} catch (error) {
			throw error;
		}
	});

	it("can handle <history> for the rest api", async function() {
		try {
			const selectDeletedNode1 = await new Promise((ok, fail) => cms.rest.connection.query("SELECT * FROM history_data WHERE original_table = 'filesystem' ORDER BY deleted_at desc LIMIT 1;", asynchandler(ok, fail)));
			expect(selectDeletedNode1.length).to.equal(0);
			const insertNode1 = await new Promise((ok, fail) => cms.rest.connection.query("INSERT INTO filesystem (path, nodetype, contents) VALUES ('/volatile-1', 'branch', null);", asynchandler(ok, fail)));
			await axiosInstance.delete(Utils.url(`/api/v1/filesystem/${insertNode1.insertId}`));
			const selectDeletedNode2 = await new Promise((ok, fail) => cms.rest.connection.query("SELECT * FROM history_data WHERE original_table = 'filesystem' ORDER BY deleted_at desc LIMIT 1;", asynchandler(ok, fail)));
			expect(selectDeletedNode2.length).to.equal(1);
		} catch(error) {
			throw error;
		}
	});

	it("can handle <json stores>", async function() {
		try {
			fs.writeFileSync(process.env.PROJECT_ROOT + "/src/json/data/example.json", JSON.stringify({meta: {title: "Whatever 1"}}));
			//
			const getResponse1 = await axiosInstance.get(Utils.url(`/json/v1/example`));
			expect(typeof getResponse1.data.data).to.equal("object");
			expect(typeof getResponse1.data.data.meta).to.equal("object");
			expect(typeof getResponse1.data.data.meta.title).to.equal("string");
			//
			const getResponse2 = await axiosInstance.get(Utils.url(`/json/v1/example`), { params: { select: JSON.stringify(["meta", "title"]) } });
			expect(typeof getResponse2.data.data).to.equal("string");
			expect(getResponse2.data.data).to.equal("Whatever 1");
			//
			const setResponse = await axiosInstance.post(Utils.url(`/json/v1/example`), { select: JSON.stringify(["meta", "title"]), value: JSON.stringify("Whatever 2") });
			//
			const getResponse3 = await axiosInstance.get(Utils.url(`/json/v1/example`));
			expect(typeof getResponse3.data.data).to.equal("object");
			expect(typeof getResponse3.data.data.meta.title).to.equal("string");
			expect(getResponse3.data.data.meta.title).to.equal("Whatever 2");
			//
			const deleteResponse = await axiosInstance.delete(Utils.url(`/json/v1/example`), { params: { select: JSON.stringify(["meta", "title"]), value: JSON.stringify("Whatever 2") } });
			//
			const getResponse4 = await axiosInstance.get(Utils.url(`/json/v1/example`));
			expect(typeof getResponse4.data.data).to.equal("object");
			expect(typeof getResponse4.data.data.meta.title).to.equal("undefined");
		} catch(error) {
			throw error;
		}
	});

});