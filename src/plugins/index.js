const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");
const path = require("path");
const importFresh = require("import-fresh");

module.exports = {
	getPlugins: (refresh = false) => {
		cms.utils.trace("cms.plugins.getPlugins");
		return cms.utils.requirePluginsDirectory(process.env.PROJECT_ROOT + "/src/plugins/service");
	}
};