const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const plugins = cms.plugins.getPlugins(true);
const Table = require("cli-table3");
const table = new Table();
const pluginsList = Object.keys(plugins).map((plugin, index) => [index+1, plugin]);
if(pluginsList.length) {
	console.log(table.concat(pluginsList).toString());
} else {
	console.log(" ✓ No plugins added yet.");
}