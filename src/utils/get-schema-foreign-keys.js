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
	return Object.keys(vschema.constraints).reduce((output, table) => output.concat(vschema.constraints[table].foreignKeys.map(fk => ({table, ...fk}))), [])
};