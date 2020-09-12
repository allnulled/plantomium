const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const plugins = cms.plugins.getPlugins(true);
const Table = require("cli-table3");
const table = new Table();
console.log(table.concat(Object.keys(plugins).map((plugin, index) => [index+1, plugin])).toString());