const { expect } = require("chai");

describe("MIGRATIONS and SEEDERS Test", function() {

	this.timeout(10 * 1000);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");
	
	skippable("can run migrations", async function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const execSync = cms.utils.execSync;
		execSync("cms rollback migrations", { cwd: process.env.PROJECT_ROOT });
		const tables = await new Promise(ok => cms.rest.connection.query("SHOW TABLES;", (error, data) => ok(data)));
		execSync("cms run migrations", { cwd: process.env.PROJECT_ROOT });
		const tables2 = await new Promise(ok => cms.rest.connection.query("SHOW TABLES;", (error, data) => ok(data)));
		expect(tables.length).to.equal(0);
		expect(tables2.length).to.not.equal(0);
	});

	skippable("can run seeders", async function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const execSync = cms.utils.execSync;
		execSync("cms rollback seeders", { cwd: process.env.PROJECT_ROOT });
		const users = await new Promise(ok => cms.rest.connection.query("SELECT * FROM users;", (error, data) => ok(data)));
		execSync("cms run seeders", { cwd: process.env.PROJECT_ROOT });
		const users2 = await new Promise(ok => cms.rest.connection.query("SELECT * FROM users;", (error, data) => ok(data)));
		expect(users2.length).to.equal(users.length + 1);
	});

	skippable("can rollback seeders", async function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const execSync = cms.utils.execSync;
		execSync("cms rollback seeders", { cwd: process.env.PROJECT_ROOT });
	});

	skippable("can rollback migrations", async function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const execSync = cms.utils.execSync;
		execSync("cms rollback migrations", { cwd: process.env.PROJECT_ROOT });
	});

	after(async function() {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		const execSync = cms.utils.execSync;
		// execSync("cms rollback seeders", { cwd: process.env.PROJECT_ROOT });
		// execSync("cms rollback migrations", { cwd: process.env.PROJECT_ROOT });
		execSync("cms reset database", { cwd: process.env.PROJECT_ROOT });
		execSync("cms run migrations", { cwd: process.env.PROJECT_ROOT });
		execSync("cms run seeders", { cwd: process.env.PROJECT_ROOT });
	})


});