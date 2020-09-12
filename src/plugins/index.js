const fs = require("fs");
const path = require("path");
const importFresh = require("import-fresh");
let cachedPlugins = undefined;

module.exports = {
	getPlugins: (refresh = false) => {
		if((typeof cachedPlugins === "undefined") || (refresh === true)) {
			cachedPlugins = {};
			const pluginsPath = process.env.PROJECT_ROOT + "/src/plugins/service";
			const vendors = fs.readdirSync(pluginsPath);
			for(let index=0; index < vendors.length; index++) {
				const vendor = vendors[index];
				const vendorPath = path.resolve(pluginsPath, vendor);
				const plugins = fs.readdirSync(vendorPath);
				for(let index=0; index < plugins.length; index++) {
					const plugin = plugins[index];
					const pluginPath = path.resolve(pluginsPath, vendor, plugin, "plugin.json");
					const data = importFresh(pluginPath);
					cachedPlugins[vendor + "/" + plugin] = { vendor, plugin, data };
				}
			}
		}
		return cachedPlugins;
	}
};