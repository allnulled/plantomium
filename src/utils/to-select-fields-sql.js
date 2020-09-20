const sqlString = require("sqlstring");
/**
 * 
 * ----
 * 
 * ### `/src/utils/to-select-fields-sql.js`
 * 
 * @name `toSelectFieldsSql`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @parameters 
 * @parameters  - `fieldsParam?:Array|String` - campos concretos a seleccionar.
 * @parameters Cuando es `undefined`, los campos serán automáticamente recogidos del `cms.schema`.
 * @parameters Es
 * @parameters  - `tablesParam:Array<String>` - tablas concretas a seleccionar.
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(authenticationParam, fieldsParam = undefined, tablesParam = [], enableJoins = true, enableTable = true, operation = undefined) {
	let sql = "";
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	let fields = cms.utils.formatFieldsParameters(fieldsParam);
	const tables = cms.utils.formatTablesParameters(tablesParam);
	const authentication = cms.utils.formatAuthenticationParameter(authenticationParam);
	let hasFields = fields.length !== 0;
	const hasTables = tables.length !== 0;
	// CheckFieldsAndTables:
	if((!hasFields) && (!hasTables)) {
		throw new Error("Required <fields> or <tables> to have some item(s) on <toSelectFieldsSql> [ERR:829]");
	}
	// PassTablesToFields:
	if((!hasFields) && hasTables) {
		IteratingTables:
		for(let index=0; index < tables.length; index++) {
			const tableName = tables[index];
			if(!(tableName in cms.schema.columns)) {
				throw new Error("Required <tableName> to exist as table in schema on <toSelectFieldsSql> [ERR:209]");
			}
			if(enableTable) {
				const tableData = cms.schema.columns[tableName];
				const columns = Object.keys(tableData);
				// IteratingColumns:
				for(let index=0; index < columns.length; index++) {
					const columnName = columns[index];
					const column = tableData[columnName];
					fields.push(`${tableName}.${columnName}`);
				}
			}
			// AttachJoinsFields:
			if(enableJoins !== true) {
				continue IteratingTables;
			}
			const joins = cms.utils.getSchemaJoinedTables(tableName);
			const joinTables = Object.keys(joins);
			// IteratingJoinTables:
			for(let indexJoins=0; indexJoins < joinTables.length; indexJoins++) {
				const joinTable = joinTables[indexJoins];
				const joinColumns = Object.keys(cms.schema.columns[joinTable]);
				// IteratingJoinColumns:
				for(let indexJoinColumns=0; indexJoinColumns < joinColumns.length; indexJoinColumns++) {
					const joinColumn = joinColumns[indexJoinColumns];
					const joinField = joinTable + "." + joinColumn;
					if(fields.indexOf(joinField) === -1) {
						fields.push(joinField);
					}
				}
			}
		}
		hasFields = fields.length;
	}
	CheckFields:
	if(!hasFields) {
		throw new Error("Required <fields> to have some item on <toSelectFieldsSql> [ERR:647]");
	}
	IncludeFields:
	for(let index=0; index < fields.length; index++) {
		const field = fields[index];
		if(typeof field !== "string") {
			throw new Error("Required <fields.*> to be strings on <toSelectFieldsSql> [ERR:481]");
		}
		const parts = field.split(".");
		const tableName = parts.length === 1 ? (tables.length !== 0 ? tables[0] : undefined) : parts[0];
		const columnName = parts.length === 1 ? parts[0] : parts[1];
		const commaSeparation = index !== 0 ? ",\n  " : "  ";
		const fieldSql = `${tableName}.${columnName}`;
		const asSql = tableName ? ` AS ${sqlString.escape(fieldSql)}` : "";
		const hasPermission = cms.utils.checkRestPermissionsTo(authentication, operation, tableName, columnName);
		if(hasPermission) {
			sql += commaSeparation + sqlString.escapeId(fieldSql) + asSql;
		}
	}
	if(sql === "") {
		throw new Error("Required query to have at least 1 field on <toSelectFieldsSql> [ERR:336]");
	}
	return sql;
}
	//////////////////////////////////////////////////////////


	/*
	let sql = "";
	let isStarted = false;
	let selectFields = fieldsParam;
	if(typeof selectFields === "string") {
		selectFields = JSON.parse(fieldsParam);
	}
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const tables = Array.isArray(tablesParam) ? tablesParam : (typeof tablesParam === "string" ) ? [tablesParam] : null;
	const hasFields = typeof selectFields !== "undefined";
	// console.log(tables ? tables[0] : null, hasFields);
	if(!hasFields) {
		// console.log("has no fields", selectFields);
		// 1. Iterate over provided tables:
		// console.log("iterating tables");
		IteratingTables:
		for(let indexTables=0; indexTables < tables.length; indexTables++) {
			const table = tables[indexTables];
			// console.log("table", table);
			if(typeof table !== "string") {
				throw new Error("Required <tablesParam.*> to be a string on toSelectFieldsSql [ERR: 021]");
			}
			// 2. Add self fields
			if(enableTable) {
				cms.schema.constraints[table].attributes.forEach(attr => {
					const field = table + "." + attr;
					sql += isStarted ? ",\n  " : "";
					sql += sqlString.escapeId(field);
					sql += " AS '" + field + "'";
					isStarted = true;
				});
			}
			// 3. Get the joins of the table:
			if(!enableJoins) {
				continue IteratingTables;
			}
			const joins = cms.utils.getSchemaJoinedTables(table);
			const joinTables = Object.keys(joins);
			// console.log(joinTables);
			// 4. Get only main tables
			joinTables.forEach(joinTable => {
				cms.schema.constraints[joinTable].attributes.forEach(attr => {
					const field = joinTable + "." + attr;
					sql += isStarted ? ",\n  " : "";
					sql += sqlString.escapeId(field);
					sql += " AS '" + field + "'";
					isStarted = true;
				});
			});
			// 5. Add fields of the joined tables too

		}
	} else if(Array.isArray(selectFields)) {
		// console.log("has fields", selectFields);
		if(selectFields.length) {
			// console.log("iterating fields");
			for(let index=0; index < selectFields.length; index++) {
				const fieldBrute = selectFields[index];
				if(typeof fieldBrute !== "string") {
					throw new Error("Required <selectFields.*> to be a string [ERR:025]");
				}
				// console.log("fieldBrute:", fieldBrute);
				const fieldTmp = fieldBrute.split(".");
				const fieldTable = (fieldTmp.length > 1) ? fieldTmp[0] : (tables.length > 0) ? tables[0] : undefined;
				const fieldColumn = (fieldTmp.length > 1) ? fieldTmp[1] : fieldTmp[0];
				const field = ((typeof fieldTable === "string") ? (fieldTable + ".") : "") + (fieldColumn);
				sql += (isStarted) ? ",\n  " : "";
				sql += `${sqlString.escapeId(field)}`;
				sql += " AS '" + field + "'";
				isStarted = true;
			}
		} else {
			if(tables.length) {
				// console.log("has table at least");
				const mainTable = tables[0];
				const tableFields = cms.schema.constraints[mainTable].attributes;
				for(let indexFields=0; indexFields < tableFields.length; indexFields++) {
					// console.log("iterating fields");
					const column = tableFields[indexFields];
					const field = mainTable + "." + column;
					sql += (isStarted) ? ",\n  " : "";
					sql += `${sqlString.escapeId(field)}`;
					sql += " AS '" + field + "'";
					isStarted = true;
				}
			} else {
				// console.log("has no table neither");
				sql += "*";
			}
		}
	} else {
		console.log(selectFields);
		throw new Error("Required <selectFields> to be an array or undefined on toSelectFieldsSql [ERR:020]");
	}
	if(sql === "") {
		sql = "*";
	}
	return sql;
	//*/