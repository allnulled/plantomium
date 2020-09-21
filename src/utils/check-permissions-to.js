module.exports = function(operationRules, authentication, asRequiredNotExcluded = true) {
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