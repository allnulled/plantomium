/**
 * 
 * ----
 * 
 * ### `/src/utils/get-schema-foreign-keys.js`
 * 
 * @name `getSchemaForeignKeys`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(vschema) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getSchemaForeignKeys");
	return Object.keys(vschema.constraints).reduce((output, table) => output.concat(vschema.constraints[table].foreignKeys.map(fk => ({table, ...fk}))), [])
};