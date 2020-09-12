const fs = require("fs-extra");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const path = require("path");
const marketPath = process.env.PROJECT_ROOT + "/src/config/markets.json";

module.exports = async function(args = undefined) {
	try {
		if(typeof args === "undefined") {
			args = require("yargs-parser")(process.argv.join(" "));
		}
		const plugin = {git: undefined, name: undefined};
		const plugins = cms.plugins.getPlugins(true);
		if(typeof args.name === "string") {
			// ok, we need the name...
		} else if(typeof args.git === "string") {
			const pluginNames = Object.keys(plugins);
			SearchingByGit:
			for(const pluginName in pluginNames) {
				const plugin = plugins[pluginName];
				if(plugin.data.git === args.git) {
					args.name = data.name;
					break SearchingByGit;
				}
			}
			if(typeof args.name !== "string") {
				throw new Error("Required <name> to be an existing string on <cms.plugins.remove> [ERR:321]");
			}
		} else {
			throw new Error("Required <name> or <git> to be a string on <cms.plugins.remove> [ERR:477]");
		}
		if(!(args.name in plugins)) {
			console.log(" ✓ Plugin seems to not exist, so...");
			console.log(" ✓ Succesfully removed!");
		}
		const pluginPath = path.resolve(process.env.PROJECT_ROOT, "src/plugins/service", args.name);
		const pluginRemovePath = path.resolve(pluginPath, "on-remove.js");
		console.log(" ✓ Uninstalling plugin...");
		if(fs.existsSync(pluginRemovePath)) {
			const onRemove = require(pluginRemovePath);
			let onRemoveResult = onRemove;
			if(typeof onRemove === "function") {
				onRemoveResult = onRemove(plugin, args);
			}
			if(onRemoveResult instanceof Promise) {
				await onRemoveResult;
			}
		}
		console.log(" ✓ Succesfully uninstalled!");
		console.log(" ✓ Removing plugin...");
		fs.removeSync(pluginPath);
		console.log(" ✓ Succesfully removed!");
	} catch(error) {
		throw error;
	}
}