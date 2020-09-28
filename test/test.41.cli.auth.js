const fs = require("fs");
const { expect } = require("chai");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

describe("CLI Test", function() {
	
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can <cms add user x>", function() {
		cms.utils.execSync("cms add user --name user1 --password user1 --email user1@mail.com --full_name user1");
		cms.utils.execSync("cms add user --name user2 --password user2 --email user2@mail.com --full_name user2");
		cms.utils.execSync("cms add user --name user3 --password user3 --email user3@mail.com --full_name user3");
		cms.utils.execSync("cms add user --name user4 --password user4 --email user4@mail.com --full_name user4");
		cms.utils.execSync("cms add user --name user5 --password user5 --email user5@mail.com --full_name user5");
	});

	it("can <cms add group --name x>", function() {
		cms.utils.execSync("cms add group --name group1");
		cms.utils.execSync("cms add group --name group2");
		cms.utils.execSync("cms add group --name group3");
		cms.utils.execSync("cms add group --name group4");
		cms.utils.execSync("cms add group --name group5");
	});

	it("can <cms add permission --name x>", function() {
		cms.utils.execSync("cms add permission --name permission1");
		cms.utils.execSync("cms add permission --name permission2");
		cms.utils.execSync("cms add permission --name permission3");
		cms.utils.execSync("cms add permission --name permission4");
		cms.utils.execSync("cms add permission --name permission5");
	});

	it("can <cms add user --name x --to-group y>", function() {
		cms.utils.execSync("cms add user --name user1 --to-group group1");
		cms.utils.execSync("cms add user --name user2 --to-group group2");
		cms.utils.execSync("cms add user --name user3 --to-group group3");
		cms.utils.execSync("cms add user --name user4 --to-group group4");
		cms.utils.execSync("cms add user --name user5 --to-group group5");
	});

	it("can <cms add permission --name x --to-group y>", function() {
		cms.utils.execSync("cms add permission --name permission1 --to-group group1");
		cms.utils.execSync("cms add permission --name permission2 --to-group group2");
		cms.utils.execSync("cms add permission --name permission3 --to-group group3");
		cms.utils.execSync("cms add permission --name permission4 --to-group group4");
		cms.utils.execSync("cms add permission --name permission5 --to-group group5");
	});
	
	it("can <cms add permission --name x --to-user y>", function() {
		cms.utils.execSync("cms add permission --name permission2 --to-user user1");
		cms.utils.execSync("cms add permission --name permission3 --to-user user1");
		cms.utils.execSync("cms add permission --name permission4 --to-user user1");
		cms.utils.execSync("cms add permission --name permission5 --to-user user1");
	});

	it("can <cms show users, groups, permissions>", function() {
		cms.utils.execSync("cms show users > test/assets/bulks/users.txt");
		cms.utils.execSync("cms show groups > test/assets/bulks/groups.txt");
		cms.utils.execSync("cms show permissions > test/assets/bulks/permissions.txt");
		const usersDump = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/users.txt").toString();
		const groupsDump = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/groups.txt").toString();
		const permissionsDump = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/permissions.txt").toString();
		expect(usersDump.indexOf("administrator")).to.not.equal(-1);
		expect(groupsDump.indexOf("administration")).to.not.equal(-1);
		expect(permissionsDump.indexOf("to administrate")).to.not.equal(-1);
	});

	it("can <cms show users --of-group --of-permission>", function() {
		cms.utils.execSync("cms show users --of-group administration> test/assets/bulks/users-attachments-1.txt");
		cms.utils.execSync("cms show groups --of-user administrator > test/assets/bulks/groups-attachments-1.txt");
		cms.utils.execSync("cms show permissions --of-group administration > test/assets/bulks/permissions-attachments-1.txt");
		const usersDump1 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/users-attachments-1.txt").toString();
		const groupsDump1 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/groups-attachments-1.txt").toString();
		const permissionsDump1 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/permissions-attachments-1.txt").toString();
		expect(usersDump1.indexOf("administrator")).to.not.equal(-1);
		expect(groupsDump1.indexOf("administration")).to.not.equal(-1);
		expect(permissionsDump1.indexOf("to administrate")).to.not.equal(-1);
		cms.utils.execSync("cms show users --of-permission 'to administrate'> test/assets/bulks/users-attachments-2.txt");
		cms.utils.execSync("cms show groups --of-permission 'to administrate' > test/assets/bulks/groups-attachments-2.txt");
		cms.utils.execSync("cms show permissions --of-user administrator > test/assets/bulks/permissions-attachments-2.txt");
		const usersDump2 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/users-attachments-1.txt").toString();
		const groupsDump2 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/groups-attachments-1.txt").toString();
		const permissionsDump2 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/permissions-attachments-1.txt").toString();
		expect(usersDump2.indexOf("administrator")).to.not.equal(-1);
		expect(groupsDump2.indexOf("administration")).to.not.equal(-1);
		expect(permissionsDump2.indexOf("to administrate")).to.not.equal(-1);
	});

	it("can <cms remove user>", function() {
		cms.utils.execSync("cms add user --name user20 --password password20 --email email20@mail.com --full_name user20");
		cms.utils.execSync("cms add user --name user21 --password password21 --email email21@mail.com --full_name user21");
		cms.utils.execSync("cms add user --name user22 --password password22 --email email22@mail.com --full_name user22");
		cms.utils.execSync("cms add user --name user23 --password password23 --email email23@mail.com --full_name user23");
		cms.utils.execSync("cms add user --name user24 --password password24 --email email24@mail.com --full_name user24");
		cms.utils.execSync("cms remove user --name user24");
		cms.utils.execSync("cms remove user --name user23");
		cms.utils.execSync("cms show auth --users > test/assets/bulks/users-2.txt");
		const allUsers2 = fs.readFileSync(process.env.PROJECT_ROOT + "/test/assets/bulks/users-2.txt").toString();
		expect(allUsers2.indexOf("user20")).to.not.equal(-1);
		expect(allUsers2.indexOf("user21")).to.not.equal(-1);
		expect(allUsers2.indexOf("user22")).to.not.equal(-1);
		expect(allUsers2.indexOf("user23")).to.equal(-1);
		expect(allUsers2.indexOf("user24")).to.equal(-1);
	});

	it("can <cms remove user --from-group --from-permission>", function() {
		
	});

	it("can <cms remove group>", function() {
		
	});

	it("can <cms remove group --from-user --from-permission>", function() {
		
	});

	it("can <cms remove permission>", function() {
		
	});

	it("can <cms remove permission --from-group --from-user>", function() {
		
	});

});