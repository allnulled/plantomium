/**
 * 
 * ----
 * 
 * ### `/src/utils/to-object-sql.js`
 * 
 * @name `toObjectSql`
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
module.exports = function(rows, table, columnId = "id") {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.toObjectSql");
	const ids = [];
	const objs = []
	const column = table + "." + columnId;
	let otherColumns = null;
	for(let index=0; index < rows.length; index++) {
		const row = rows[index];
		if (ids.indexOf(row[column]) === -1) {
			ids.push(row[column]);
			if (otherColumns === null) {
				otherColumns = Object.keys(row).filter(aColumn => aColumn.startsWith(table + "."));
			}
			const product = otherColumns.reduce((output = {}, otherColumn) => {
				output[otherColumn.replace(table + ".", "")] = row[otherColumn];
				return output;
			}, {});
			if(product.id !== null) {
				objs.push(product);
			}
		}
	};
	return objs;
}