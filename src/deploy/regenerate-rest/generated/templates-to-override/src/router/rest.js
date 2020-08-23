module.exports = function(cms, router) {<%

const schemaFilename = require("path").basename(process.env.SCHEMA_VIRTUAL_OUTPUT);
const schema = parameters.data[schemaFilename];
const tableNames = Object.keys(schema.columns);
for(let index = 0; index < tableNames.length; index++) {
	const tableName = tableNames[index];
	const table = schema.constraints[tableName];
	const modelName = table.model;
	const camelName = modelName.substr(0,1).toLowerCase() + modelName.substr(1);
%>
	cms.rest.controllers.<%-camelName%>.create().mountToRouter(router);<% } %>
}