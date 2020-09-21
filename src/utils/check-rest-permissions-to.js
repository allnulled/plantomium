module.exports = function(authentication = undefined, operationP, table, column) {
	if(!authentication) {
		return true;
	}
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
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
			throw table;
			throw new Error("Required <table> to exist in schema on <checkRestPermissionsTo> [ERR:1781]");
		}
		if(!(column in cms.schema.columns[table])) {
			throw new Error("Required <column> to exist as column of table in schema on <checkRestPermissionsTo> [ERR:482]");
		}
		const requireRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "require"], {});
		const excludeRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "exclude"], {});
		const canByRequireTable = cms.utils.checkPermissionsTo(requireRulesTable, authentication, true);
		const canByExcludeTable = cms.utils.checkPermissionsTo(excludeRulesTable, authentication, false);
		const requireRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "require"], {});
		const excludeRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "exclude"], {});
		const canByRequireColumn = cms.utils.checkPermissionsTo(requireRulesColumn, authentication, true);
		const canByExcludeColumn = cms.utils.checkPermissionsTo(excludeRulesColumn, authentication, false);
		return canByRequireTable && canByExcludeTable && canByRequireColumn && canByExcludeColumn;
	}
	throw new Error("Required <table> and <column> to be something on <checkRestPermissionsTo> [ERR:185]");
}