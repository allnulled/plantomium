const mysqlSchema = require("mysql-schema");

/**
 * 
 * ----
 * 
 * ### `/src/utils/generate-virtual-schema.js`
 * 
 * @name `generateVirtualSchema`
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
module.exports = function(cms) {

	const getHiddenTables = function(vschema) {
		const hiddenTables = [].concat(vschema.general.hiddenTables);
		const allTablenames = Object.keys(vschema.constraints);
		for (let index = 0; index < allTablenames.length; index++) {
			const name = allTablenames[index];
			const item = vschema.constraints[name];
			if (item.isHidden) {
				hiddenTables.push(name);
			}
		}
		return hiddenTables;
	};

	const getHiddenColumns = function(vschema, hiddenTables = []) {
		const hiddenColumns = [].concat([]);
		const allTablenames = Object.keys(vschema.constraints);
		FindingHiddenColumns:
			for (let index = 0; index < allTablenames.length; index++) {
				const tableName = allTablenames[index];
				if (hiddenTables.indexOf(tableName) !== -1) {
					continue FindingHiddenColumns;
				}
				const table = vschema.columns[tableName];
				const columnNames = Object.keys(table);
				for (let index = 0; index < columnNames.length; index++) {
					const columnName = columnNames[index];
					const column = table[columnName];
					if (column.isHidden) {
						hiddenColumns.push({
							table: tableName,
							column: columnName
						});
					}
				}
			}
		return hiddenColumns;
	};

	const removeTable = function(tablename, vschema) {
		if (typeof vschema.constraints[tablename] === "object") {
			Object.keys(vschema.columns[tablename]).forEach(columnname => {
				removeColumn(tablename, columnname, vschema);
			});
		}
		delete vschema.constraints[tablename];
		delete vschema.columns[tablename];
	};

	const removeColumn = function(tablename, columnname, vschema, memo = []) {
		const id = tablename+":"+columnname;
		if(memo.indexOf(id) !== -1) return;
		memo.push(id);
		Object.keys(vschema.columns).forEach(tablename1 => {
			Object.keys(vschema.columns[tablename1]).forEach(columnname1 => {
				vschema.columns[tablename1][columnname1].referencesTo = vschema.columns[tablename1][columnname1].referencesTo.filter(ref => ref.table === tablename && ref.column === columnname);
				vschema.columns[tablename1][columnname1].referencedBy = vschema.columns[tablename1][columnname1].referencedBy.filter(ref => ref.table === tablename && ref.column === columnname);
			});
			vschema.constraints[tablename1].attributes = vschema.constraints[tablename1].attributes.filter(attr => attr !== columnname);
			vschema.constraints[tablename1].foreignKeys = vschema.constraints[tablename1].foreignKeys.filter(fk => {
			const isRefSrc = (tablename1 === tablename && fk.column === columnname);
			const isRefDst = (fk.referencedTable === tablename && fk.referencedColumn === columnname);
				if(isRefSrc) {
					removeColumn(fk.referencedTable, fk.referencedColumn, vschema, memo);
					return false;
				} else if(isRefDst) {
					removeColumn(tablename1, fk.column, vschema, memo);
					return false;
				}
				return true;
			});
		});
		delete vschema.columns[tablename][columnname];
	};

	const removeSchemaField = function(vschema) {
		Object.keys(vschema.columns).forEach(tablename => {
			Object.keys(vschema.columns[tablename] || {}).forEach(columnname => {
				delete vschema.columns[tablename][columnname].schema;
			});
		});
	};

	const cloneObject = mysqlSchema.stringifyFn(cms.originalSchema);
	let vschema;
	eval("vschema = " + cloneObject);
	vschema.columns = Object.assign({}, vschema.columns);
	vschema.constraints = Object.assign({}, vschema.constraints);
	removeSchemaField(vschema);

	const hiddenTables = getHiddenTables(vschema);

	const hiddenColumns = getHiddenColumns(vschema, hiddenTables);
	hiddenTables.forEach(hiddenTable => removeTable(hiddenTable, vschema));
	hiddenColumns.forEach(hiddenColumn => removeColumn(hiddenColumn.table, hiddenColumn.column, vschema));

	cms.virtualSchema = vschema;

	return vschema;
}