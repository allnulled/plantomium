const fs = require("fs");
const {
	expect
} = require("chai");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

describe("MARKETS Test", function() {

	this.timeout(1000 * 5);

	const marketsPath = process.env.PROJECT_ROOT + "/src/config/markets.json";

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can add external market by url", async function() {
		try {
			this.timeout(30 * 1000);
			try {
				await cms.markets.remove({
					name: "plantomium-official-market"
				});
			} catch (error) {}
			const data = JSON.parse(fs.readFileSync(marketsPath).toString());
			expect(typeof data).to.equal("object");
			expect(Object.keys(data).length).to.equal(0);
			await cms.markets.add({
				url: "https://raw.githubusercontent.com/allnulled/plantomium-market/master/market.json"
			});
			const data2 = JSON.parse(fs.readFileSync(marketsPath).toString());
			expect(typeof data2).to.equal("object");
			expect(Object.keys(data2).length).to.equal(1);
		} catch (error) {
			throw error;
		}
	});

	it("can remove market by name", async function() {
		try {
			const data = JSON.parse(fs.readFileSync(marketsPath).toString());
			expect(typeof data).to.equal("object");
			expect(Object.keys(data).length).to.equal(1);
			await cms.markets.remove({
				name: "plantomium-official-market"
			});
			const data2 = JSON.parse(fs.readFileSync(marketsPath).toString());
			expect(typeof data2).to.equal("object");
			expect(Object.keys(data2).length).to.equal(0);
		} catch (error) {
			throw error;
		}
	});

});

describe("PLUGINS Test", function() {

	this.timeout(1000 * 5);

	before(function() {
		fs.writeFileSync(process.env.PROJECT_ROOT + "/src/config/markets.json", `{
	"plantomium-official-market": {
		"example": {
			"plugin": "plantomium/example",
			"git": "https://github.com/allnulled/plantomium-plugin-example.git",
			"branch": "master",
			"json": "https://raw.githubusercontent.com/allnulled/plantomium-plugin-example/master/plugin.json"
		}
	}
}`, "utf8");
	});

	after(function() {
		fs.writeFileSync(process.env.PROJECT_ROOT + "/src/config/markets.json", `{
	"plantomium-official-market": {
		"example": {
			"plugin": "plantomium/example",
			"git": "https://github.com/allnulled/plantomium-plugin-example.git",
			"branch": "master",
			"json": "https://raw.githubusercontent.com/allnulled/plantomium-plugin-example/master/plugin.json"
		}
	}
}`, "utf8");
	});

	it("can add external plugin by name (calling on-add.js)", async function() {
		try {
			this.timeout(30 * 1000);
			try {
				await cms.plugins.remove({
					name: "plantomium/example"
				});
			} catch (error) {}
			const plugins = await cms.plugins.getPlugins(true);
			expect(typeof plugins).to.equal("object");
			expect(Object.keys(plugins).length).to.equal(0);
			await cms.plugins.add({
				name: "plantomium/example"
			});
			const plugins2 = await cms.plugins.getPlugins(true);
			expect(typeof plugins2).to.equal("object");
			expect(Object.keys(plugins2).length).to.equal(1);
			const contents = fs.readFileSync(process.env.PROJECT_ROOT + "/docs/plugins/plantomium/example/README.md").toString();
			expect(contents).to.equal("The plugin was added successfully.");
		} catch (error) {
			throw error;
		}
	});

	it("can remove plugin by name (calling on-remove.js)", async function() {
		try {
			const plugins = await cms.plugins.getPlugins(true);
			expect(typeof plugins).to.equal("object");
			expect(Object.keys(plugins).length).to.equal(1);
			await cms.plugins.remove({
				name: "plantomium/example"
			});
			const plugins2 = await cms.plugins.getPlugins(true);
			expect(typeof plugins2).to.equal("object");
			expect(Object.keys(plugins2).length).to.equal(0);
			const exists = fs.existsSync(process.env.PROJECT_ROOT + "/docs/plugins/plantomium/example/README.md");
			expect(exists).to.equal(false);
		} catch (error) {
			throw error;
		}
	});

});