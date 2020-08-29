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
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(selectFields = undefined, tablesParam = [], enableJoins = true, enableTable = true) {
	let sql = "";
	let isStarted = false;
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
		throw new Error("Required <selectFields> to be an array or undefined on toSelectFieldsSql [ERR:020]");
	}
	if(sql === "") {
		sql = "*";
	}
	return sql;
}