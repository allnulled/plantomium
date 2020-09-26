const fs = require("fs");
const path = require("path");
const mysqlSchema = require("mysql-schema");

module.exports = function(cms) {
	const outputVirtualPath = path.resolve(process.env.PROJECT_ROOT, process.env.SCHEMA_VIRTUAL_OUTPUT);
	// @TODO: 1. generate virtual schema:
	const virtualSchema = cms.utils.generateVirtualSchema(cms);
	cms.schema = virtualSchema;
	const virtualSchemaJs = mysqlSchema.stringifyFn(virtualSchema);
	fs.writeFileSync(outputVirtualPath, "module.exports = " + virtualSchemaJs, "utf8");
}