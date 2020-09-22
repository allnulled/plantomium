const fs = require("fs-extra");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const path = require("path");
const marketPath = process.env.PROJECT_ROOT + "/src/config/markets.json";

module.exports = function(args = undefined) {
	cms.utils.trace("cms.plugins.add");
	if(typeof args === "undefined") {
		args = require("yargs-parser")(process.argv.join(" "));
	}
	const plugin = {git: undefined, name: undefined, branch: undefined};
	if(typeof args.name === "string") {
		const markets = cms.markets.getMarkets();
		const marketNames = Object.keys(markets);
		plugin.name = args.name;
		LookingForPlugin:
		for(let index=0; index < marketNames.length; index++) {
			const market = marketNames[index];
			const plugins = markets[market];
			const pluginNames = Object.keys(plugins);
			for(let index=0; index < pluginNames.length; index++) {
				const pluginName = pluginNames[index];
				const pluginMetadata = plugins[pluginName];
				if(pluginMetadata.plugin === args.name) {
					plugin.git = pluginMetadata.git;
					break LookingForPlugin;
				}
			}
		}
		if(typeof plugin.git !== "string") {
			throw new Error("Required <name> parameter to be an existing plugin in <config/markets.json> on <cms add plugin> [ERR:539]");
		}
	} else if(typeof args.git === "string") {
		plugin.git = args.git;
		plugin.name = undefined;
	} else {
		throw new Error("Required <name> or <git> parameters on <cms add plugin> [ERR:800");
	}
	const currentPlugins = cms.plugins.getPlugins(true);
	if(args.name in currentPlugins) {
		console.log(" ✓ Plugin is already installed, so...");
		return console.log(" ✓ Installed successfully!");
	}
	console.log(" ✓ Downloading plugin...");
	const pluginDownloadPath = process.env.PROJECT_ROOT + "/src/downloads/plugins/" + cms.utils.serializeDate();
	fs.mkdirSync(pluginDownloadPath);
	cms.utils.execSync(`git clone ${JSON.stringify(plugin.git)}` + (plugin.branch ? ` -b ${plugin.branch} ` : " ") + ".", {
		cwd: pluginDownloadPath
	});
	console.log(" ✓ Downloaded successfully!");
	console.log(" ✓ Installing plugin...");
	const pluginMetadata = require(pluginDownloadPath + "/plugin.json");
	const { plugin: pluginName } = pluginMetadata;
	if(typeof pluginName !== "string") {
		throw new Error("Required <plugin> to be a string in file /plugin.json> on <cms.plugins.add> [ERR:581]");
	}
	// @TODO: move plugin from downloads to plugins using plugin name as path
	const pluginDestPath = path.resolve(process.env.PROJECT_ROOT, "src/plugins/service", pluginName);
	fs.removeSync(pluginDestPath);
	fs.moveSync(pluginDownloadPath, pluginDestPath);
	// @TODO: require on-add file
	const onAddPath = path.resolve(pluginDestPath, "on-add.js");
	if(!fs.existsSync(onAddPath)) {
		return console.log(" ✓ Installed successfully!");
	}
	const onAdd = require(onAddPath);
	let onAddResult = onAdd;
	if(typeof onAdd === "function") {
		onAddResult = onAdd(plugin, args);
	}
	if(onAddResult instanceof Promise) {
		return onAddResult.then(data => {
			console.log(" ✓ Installed successfully!");
			return data;
		}).catch(error => {
			console.log("Plugin event <on-add> thrown an error:", error);
		});
	}
};