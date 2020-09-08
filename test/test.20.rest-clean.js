const { expect } = require("chai");

describe("REST:CLEAN Test", function() {
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can clean all previous rest test items", async function() {
		try {
			const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
			await cms.rest.connection.query("DELETE FROM combo_user_and_group WHERE id_user != 1;")
			await cms.rest.connection.query("DELETE FROM combo_group_and_permission WHERE id_group != 1;")
			await cms.rest.connection.query("DELETE FROM users WHERE name = 'username';")
			await cms.rest.connection.query("DELETE FROM sessions WHERE id_user IS NOT NULL;")
			await cms.rest.connection.query("DELETE FROM permissions WHERE name LIKE 'permission %';")
			await cms.rest.connection.query("DELETE FROM groups WHERE name LIKE 'group %';")
		} catch(error) {
			throw error;
		}
	});

});