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
			if (item.isHidden && (hiddenTables.indexOf(item) === -1)) {
				hiddenTables.push(name);
			}
		}
		return hiddenTables;
	};

	const getHiddenColumns = function(vschema, hiddenTables = []) {
		const hiddenColumns = vschema.general.hiddenColumns.map(columnExpression => {
			if(typeof columnExpression === "string") {
				return columnExpression.split(".")
			} else if(Array.isArray(columnExpression)) {
				return columnExpression;
			} else if(typeof columnExpression === "object") {
				return [columnExpression.table, columnExpression.column];
			} else {
				throw new Error("Parameters <schema.general.hiddenColumns.*> must be: strings, arrays or object. (ERR:010)");
			}
		});
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
			delete vschema.constraints[tablename];
			delete vschema.columns[tablename];
		}
	};

	const removeColumn = function(tablename, columnname, vschema, memo = []) {
		const id = tablename + ":" + columnname;
		if (memo.indexOf(id) !== -1) return;
		memo.push(id);
		// Per each table:
		Object.keys(vschema.columns).forEach(tablename1 => {
			// Per each column:
			Object.keys(vschema.columns[tablename1]).forEach(columnname1 => {
				// Replace referencesTo:
				vschema.columns[tablename1][columnname1].referencesTo = vschema.columns[tablename1][columnname1].referencesTo.filter(ref => {
					return !((ref.table === tablename) && (ref.column === columnname));
				});
				// Replace referencesBy:
				vschema.columns[tablename1][columnname1].referencedBy = vschema.columns[tablename1][columnname1].referencedBy.filter(ref => {
					return !((ref.table === tablename) && (ref.column === columnname));
				});
			});
			// When same tablename:
			if(tablename1 === tablename) {
				// Remove pks:
				vschema.constraints[tablename1].primaryKeys = vschema.constraints[tablename1].primaryKeys.filter(pk => {
					return pk !== columnname;
				});
				// Remove attributes:
				vschema.constraints[tablename1].attributes = vschema.constraints[tablename1].attributes.filter(column => {
					return column !== columnname;
				});
			}
			// Remove fks:
			vschema.constraints[tablename1].foreignKeys = vschema.constraints[tablename1].foreignKeys.filter(fk => {
				return !(((tablename1 === tablename) && (fk.column === columnname)) || ((fk.referencedTable === tablename) && (fk.referencedColumn === columnname)));
			});
		});
		// Remove the column itself:
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
	hiddenTables.forEach(table => {
		removeTable(table, vschema);
	});
	hiddenColumns.forEach(([table, column]) => {
		removeColumn(table, column, vschema);
	});

	cms.virtualSchema = vschema;

	return vschema;
}