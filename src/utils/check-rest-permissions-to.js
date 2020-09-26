module.exports = function(authentication = undefined, operationP, table, column) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.checkRestPermissionsTo");
	cms.utils.debug("  · operation: " + (operationP + ":" + table + ":" + column).toUpperCase());
	const operation = "on" + operationP.substr(0,1).toUpperCase() + operationP.substr(1);
	let hasPermission;
	CheckingPermission:
	if((!column) && (!table)) {
		throw new Error("Required <table> or <column> to be something on <checkRestPermissionsTo> [ERR:933]");
	} else if(!column) {
		if(!(table in cms.schema.constraints)) {
			throw new Error("Required <table> to exist in schema on <checkRestPermissionsTo> [ERR:441]");
		}
		const requireRules = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "require"], {});
		const excludeRules = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "exclude"], {});
		const canByRequire = cms.utils.checkPermissionsTo(requireRules, authentication, true);
		const canByExclude = cms.utils.checkPermissionsTo(excludeRules, authentication, false);
		return canByRequire && canByExclude;
	} else if(!table) {
		throw new Error("Required <table> to be something on <checkRestPermissionsTo> [ERR:877]");
	} else if(column && table) {
		if(!(table in cms.schema.columns)) {
			return false;
		}
		if(!(column in cms.schema.columns[table])) {
			return false;
		}
		const requireRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "require"], {});
		const excludeRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "exclude"], {});
		cms.utils.debug(`  · check require rules for table: ${table} (1/4)`);
		const canByRequireTable = cms.utils.checkPermissionsTo(requireRulesTable, authentication, true);
		if(!canByRequireTable) {
			cms.utils.debug("  · failed!");
			cms.utils.debug("");
			return false;
		}
		cms.utils.debug(`  · check exclude rules for table: ${table} (2/4)`);
		const canByExcludeTable = cms.utils.checkPermissionsTo(excludeRulesTable, authentication, false);
		if(!canByExcludeTable) {
			cms.utils.debug("  · failed!");
			cms.utils.debug("");
			return false;
		}
		const requireRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "require"], {});
		const excludeRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "exclude"], {});
		cms.utils.debug(`  · check require rules for column: ${table.column} (3/4)`);
		const canByRequireColumn = cms.utils.checkPermissionsTo(requireRulesColumn, authentication, true);
		if(!canByRequireColumn) {
			cms.utils.debug("  · failed!");
			cms.utils.debug("");
			return false;
		}
		cms.utils.debug(`  · check require rules for column: ${table.column} (4/4)`);
		const canByExcludeColumn = cms.utils.checkPermissionsTo(excludeRulesColumn, authentication, false);
		if(!canByExcludeColumn) {
			cms.utils.debug("  · failed!");
			cms.utils.debug("");
			return false;
		}
		return true; canByRequireTable && canByExcludeTable && canByRequireColumn && canByExcludeColumn;
	}
	throw new Error("Required <table> and <column> to be something on <checkRestPermissionsTo> [ERR:185]");
}