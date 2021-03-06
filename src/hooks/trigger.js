const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");

module.exports = async function(name, parameters) {
	try {
		cms.utils.trace("cms.hooks.trigger");
		if (typeof name !== "string") {
			throw new Error("Required <name> to be a string on <cms.hooks.trigger> [ERR:849]");
		}
		if (!(name in cms.hooks.service)) {
			return;
		}
		const hooksSorted = cms.hooks.service[name].sort(cms.hooks.sorter);
		let lastResult = undefined;
		for (let index = 0; index < hooksSorted.length; index++) {
			const hook = hooksSorted[index];
			if(typeof hook.hook !== "function") {
				throw new Error("Required <cms.hooks.service.*.hook> to be functions on <cms.hooks.trigger> [ERR:270]");
			}
			lastResult = hook.hook.call(hook, parameters, name, index, cms);
			if(lastResult instanceof Promise) {
				lastResult = await lastResult;
			}
		}
		return lastResult || (((typeof parameters === "object") && ("__output__" in parameters)) ? parameters.__output__ : undefined);
	} catch (error) {
		throw error;
	}
}