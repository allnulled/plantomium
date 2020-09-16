const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const { expect } = require("chai");

describe("REST-AUTHORIZATION Test", function() {
	
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can include authorization rules in vschema", function(done) {
		const permissionOnGet = cms.utils.dataGetter(cms.schema, ["columns", "users", "full_name", "auth", "onGet", "require", "permissions", "0"], undefined);
		const permissionOnPost = cms.utils.dataGetter(cms.schema, ["columns", "users", "full_name", "auth", "onPost", "require", "permissions", "0"], undefined);
		const permissionOnPut = cms.utils.dataGetter(cms.schema, ["columns", "users", "full_name", "auth", "onPut", "require", "permissions", "0"], undefined);
		const permissionOnDelete = cms.utils.dataGetter(cms.schema, ["columns", "users", "full_name", "auth", "onDelete", "require", "permissions", "0"], undefined);
		expect(permissionOnGet).to.equal("to administrate");
		expect(permissionOnPost).to.equal("to administrate");
		expect(permissionOnPut).to.equal("to administrate");
		expect(permissionOnDelete).to.equal("to administrate");
		done();
	});

	it("can respect model x op rest rules", function(done) {
		
		done();
	});

});