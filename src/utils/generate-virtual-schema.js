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

	cms.utils.trace("cms.utils.generateVirtualSchema");

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
		if((tablename in vschema.columns) && (columnname in vschema.columns[tablename])) {
			delete vschema.columns[tablename][columnname];
		}
	};

	const removeSchemaField = function(vschema) {
		Object.keys(vschema.columns).forEach(tablename => {
			Object.keys(vschema.columns[tablename] || {}).forEach(columnname => {
				delete vschema.columns[tablename][columnname].schema;
			});
		});
	};

	const addAuthorizationStatement = function(vschema, authorizationStatement) {
		const { table, column, operation, aspect, id } = authorizationStatement;
		if(typeof table !== "string") {
			throw new Error("Required <table> to be a string on <generateVirtualSchema> [ERR:A380]");
		}
		if(typeof operation !== "string") {
			throw new Error("Required <operation> to be a string on <generateVirtualSchema> [ERR:A381]");
		}
		if(typeof aspect !== "string") {
			throw new Error("Required <aspect> to be a string on <generateVirtualSchema> [ERR:A382]");
		}
		if(typeof id !== "string") {
			throw new Error("Required <id> to be a string on <generateVirtualSchema> [ERR:A383]");
		}
		const operationProperty = "on" + operation.substr(0,1).toUpperCase() + operation.substr(1);
		if(typeof column !== "undefined") {
			if(!(table in vschema.columns)) {
				throw new Error("Bad authorization rule: missing table <" + table + "> [ERR:B890]");
			}
			if(!(column in vschema.columns[table])) {
				throw new Error("Bad authorization rule: missing column <" + column + "> in table <" + table + "> [ERR:B891]");
			}
			if(typeof vschema.columns[table][column].auth !== "object") {
				vschema.columns[table][column].auth = {};
			}
			if(typeof vschema.columns[table][column].auth[operationProperty] !== "object") {
				vschema.columns[table][column].auth[operationProperty] = {}
			}
			if(typeof vschema.columns[table][column].auth[operationProperty].require !== "object") {
				vschema.columns[table][column].auth[operationProperty].require = {};
			}
			if(typeof vschema.columns[table][column].auth[operationProperty].require[aspect] !== "object") {
				vschema.columns[table][column].auth[operationProperty].require[aspect] = [];
			}
			if(vschema.columns[table][column].auth[operationProperty].require[aspect].indexOf(id) === -1) {
				vschema.columns[table][column].auth[operationProperty].require[aspect].push(id);
			}
		} else {
			if(!(table in vschema.constraints)) {
				throw new Error("Bad authorization rule: missing table <" + table + "> [ERR:C890]");
			}
			if(typeof vschema.constraints[table].auth !== "object") {
				vschema.constraints[table].auth = {}
			}
			if(typeof vschema.constraints[table].auth[operationProperty] !== "object") {
				vschema.constraints[table].auth[operationProperty] = {}
			}
			if(typeof vschema.constraints[table].auth[operationProperty].require !== "object") {
				vschema.constraints[table].auth[operationProperty].require = {};
			}
			if(typeof vschema.constraints[table].auth[operationProperty].require[aspect] !== "object") {
				vschema.constraints[table].auth[operationProperty].require[aspect] = [];
			}
			if(vschema.constraints[table].auth[operationProperty].require[aspect].indexOf(id) === -1) {
				vschema.constraints[table].auth[operationProperty].require[aspect].push(id);
			}
		}
	}

	const addAuthorizationRules = function(vschema, authorizationRules) {
		if(typeof authorizationRules !== "object") {
			throw new Error("Required <authorizationRules> to be an object on <generateVirtualSchema> [ERR:1309]");
		}
		const {rules} = authorizationRules;
		if(!Array.isArray(rules)) {
			throw new Error("Required <authorizationRules.rules> to be an array on <generateVirtualSchema> [ERR:1310]");
		}
		for(let indexRule=0; indexRule < rules.length; indexRule++) {
			const rule = rules[indexRule];
			const ids = rule.on;
			const ops = rule.require.to || ["get", "post", "put", "delete"];
			const { permissions = [], groups = [], users = [] } = rule.require;
			if(!Array.isArray(permissions)) {
				throw new Error("Required <authorizationRules.rules.*.require.permissions> to be an array on <generateVirtualSchema> [ERR:1520]");
			}
			if(!Array.isArray(groups)) {
				throw new Error("Required <authorizationRules.rules.*.require.groups> to be an array on <generateVirtualSchema> [ERR:1521]");
			}
			if(!Array.isArray(users)) {
				throw new Error("Required <authorizationRules.rules.*.require.users> to be an array on <generateVirtualSchema> [ERR:1522]");
			}
			if(!Array.isArray(ids)) {
				throw new Error("Required <authorizationRules.rules.*.on> to be an array on <generateVirtualSchema> [ERR:1523]");
			}
			for(let indexId=0; indexId < ids.length; indexId++) {
				const id = ids[indexId];
				const [table, column = undefined] = id.split(".");
				for(let indexOp=0; indexOp < ops.length; indexOp++) {
					const op = ops[indexOp];
					for(let indexPermission=0; indexPermission < permissions.length; indexPermission++) {
						const permission = permissions[indexPermission];
						addAuthorizationStatement(vschema, {
							table,
							column,
							operation: op,
							aspect: "permissions",
							id: permission,
						});
					}
					for(let indexGroup=0; indexGroup < groups.length; indexGroup++) {
						const group = groups[indexGroup];
						addAuthorizationStatement(vschema, {
							table,
							column,
							operation: op,
							aspect: "groups",
							id: group,
						});
					}
					for(let indexUser=0; indexUser < users.length; indexUser++) {
						const user = users[indexUser];
						addAuthorizationStatement(vschema, {
							table,
							column,
							operation: op,
							aspect: "users",
							id: user,
						});
					}
				}
			}
		}
	}

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
	hiddenColumns.forEach((columnData) => {
		const [table, column] = columnData;
		removeColumn(table, column, vschema);
	});

	const authorizationRules = require(process.env.PROJECT_ROOT + "/src/config/authorization.json");
	addAuthorizationRules(vschema, authorizationRules);

	cms.virtualSchema = vschema;

	return vschema;
}