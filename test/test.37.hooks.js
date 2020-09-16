const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");
const {
	expect
} = require("chai");

describe("HOOKS Test", function() {

	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");

	const cleanFiles = function() {
		try {
			fs.unlinkSync(process.env.PROJECT_ROOT + "/added.txt");
		} catch (error) {}
		try {
			fs.unlinkSync(process.env.PROJECT_ROOT + "/event-one.txt");
		} catch (error) {}
		try {
			fs.unlinkSync(process.env.PROJECT_ROOT + "/event-two.txt");
		} catch (error) {}
		try {
			fs.unlinkSync(process.env.PROJECT_ROOT + "/event-three.txt");
		} catch (error) {}
	}

	before(function() {
		cleanFiles();
	});

	after(function() {
		cleanFiles();
	});

	skippable("can add, remove and trigger (sorting) hooks", async function() {
		try {

			let value = undefined;
			cms.hooks.add("on-invented-event", {
				name: "runtime hook 0",
				description: "A hook loaded on runtime",
				hook(parameters) {
					parameters.counter++;
					expect(fs.existsSync(process.env.PROJECT_ROOT + "/added.txt")).to.equal(false);
				},
				priority: 40,
			});
			cms.hooks.add("on-invented-event", {
				name: "runtime hook 2",
				description: "A hook loaded on runtime",
				hook(parameters) {
					parameters.counter++;
					expect(fs.existsSync(process.env.PROJECT_ROOT + "/added.txt")).to.equal(true);
				},
				priority: 15,
			});
			cms.hooks.add("on-invented-event", {
				name: "runtime hook 1",
				description: "A hook loaded on runtime",
				hook(parameters) {
					parameters.counter++;
					fs.writeFileSync(process.env.PROJECT_ROOT + "/added.txt", "ok" + parameters.counter, "utf8");
				},
				priority: 30,
			});
			cms.hooks.add("on-invented-event", {
				name: "runtime hook 3 (removed)",
				description: "A hook loaded on runtime, but removed...",
				hook(parameters) {
					parameters.counter++;
					throw new Error("Event not removed error, revise test");
				},
				priority: 20,
			});
			cms.hooks.add("on-invented-event", {
				name: "runtime hook 3",
				description: "A hook loaded on runtime",
				hook(parameters) {
					return new Promise(function(ok, fail) {
						parameters.counter++;
						const contents = fs.readFileSync(process.env.PROJECT_ROOT + "/added.txt").toString();
						setTimeout(() => ok(contents), 50);
					});
				},
				priority: 10,
			});
			cms.hooks.remove("on-invented-event", "runtime hook 3 (removed)");
			const result = await cms.hooks.trigger("on-invented-event", {
				counter: 0
			});
			expect(result).to.equal("ok2");
			fs.unlinkSync(process.env.PROJECT_ROOT + "/added.txt");
			const result2 = await cms.hooks.trigger("on-invented-event", {
				counter: 2
			});
			expect(result2).to.equal("ok4");
			expect("on-invented-event" in cms.hooks.service).to.equal(true);
			cms.hooks.remove("on-invented-event");
			expect("on-invented-event" in cms.hooks.service).to.equal(false);
		} catch (error) {
			throw error;
		}
	});

	skippable("can require a new hooks directory", async function() {
		try {
			cms.utils.requireHooksDirectory(__dirname + "/support/hooks-directory");
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-one.txt")).to.equal(false);
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-two.txt")).to.equal(false);
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-three.txt")).to.equal(false);
			cms.hooks.remove("on-event-three", "On event three hook");
			await cms.hooks.trigger("on-event-one");
			await cms.hooks.trigger("on-event-two");
			await cms.hooks.trigger("on-event-three");
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-one.txt")).to.equal(true);
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-two.txt")).to.equal(true);
			expect(fs.existsSync(process.env.PROJECT_ROOT + "/event-three.txt")).to.equal(false);
		} catch (error) {
			throw error;
		}
	});

});