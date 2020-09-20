const checkRequirePermissionsTo = function(requireRules, authentication) {
	return checkRequireExcludePermissionsTo(requireRules, authentication, true);
};

const checkExcludePermissionsTo = function(excludeRules, authentication) {
	return checkRequireExcludePermissionsTo(excludeRules, authentication, false);
};

const checkRequireExcludePermissionsTo = function(operationRules, authentication, asRequiredNotExcluded = true) {
	const { permissions = [], groups = [], users = [] } = operationRules;
	if(Array.isArray(permissions) && (permissions.length !== 0)) {
		let canByPermissions = asRequiredNotExcluded ? false : true;
		for(let index=0; index < authentication.permissions.length; index++) {
			const permission = authentication.permissions[index];
			if(permissions.indexOf(permission.name) !== -1) {
				canByPermissions = asRequiredNotExcluded ? true : false;
			}
		}
		if(canByPermissions === false) {
			return false;
		}
	}
	if(Array.isArray(groups) && (groups.length !== 0)) {
		let canByGroups = asRequiredNotExcluded ? false : true;
		for(let index=0; index < authentication.groups.length; index++) {
			const group = authentication.groups[index];
			if(groups.indexOf(group.name) !== -1) {
				canByGroups = asRequiredNotExcluded ? true : false;
			}
		}
		if(canByGroups === false) {
			return false;
		}
	}
	if(Array.isArray(users) && (users.length !== 0)) {
		let canByUsers = asRequiredNotExcluded ? false : true;
		if(users.indexOf(authentication.user.name) !== -1) {
			canByUsers = asRequiredNotExcluded ? true : false;
		}
		if(canByUsers === false) {
			return false;
		}
	}
	return true;
};

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
		const canByRequire = checkRequirePermissionsTo(requireRules, authentication);
		const canByExclude = checkExcludePermissionsTo(excludeRules, authentication);
		return canByRequire && canByExclude;
	} else if(!table) {
		throw new Error("Required <table> to be something on <checkRestPermissionsTo> [ERR:877]");
	} else if(column && table) {
		if(!(table in cms.schema.columns)) {
			throw new Error("Required <table> to exist in schema on <checkRestPermissionsTo> [ERR:1781]");
		}
		if(!(column in cms.schema.columns[table])) {
			throw new Error("Required <column> to exist as column of table in schema on <checkRestPermissionsTo> [ERR:482]");
		}
		const requireRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "require"], {});
		const excludeRulesTable = cms.utils.dataGetter(cms, ["schema", "constraints", table, "auth", operation, "exclude"], {});
		const canByRequireTable = checkRequirePermissionsTo(requireRulesTable, authentication);
		const canByExcludeTable = checkExcludePermissionsTo(excludeRulesTable, authentication);
		const requireRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "require"], {});
		const excludeRulesColumn = cms.utils.dataGetter(cms, ["schema", "columns", table, column, "auth", operation, "exclude"], {});
		const canByRequireColumn = checkRequirePermissionsTo(requireRulesColumn, authentication);
		const canByExcludeColumn = checkExcludePermissionsTo(excludeRulesColumn, authentication);
		return canByRequireTable && canByExcludeTable && canByRequireColumn && canByExcludeColumn;
	}
	throw new Error("Required <table> and <column> to be something on <checkRestPermissionsTo> [ERR:185]");
}