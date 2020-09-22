const ___INVALIDATED = false;
const VALIDATED___ = true;

module.exports = function(operationRules, authentication, isRequired = true) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.checkPermissionsTo");
	const permissions = cms.utils.dataGetter(operationRules, ["permissions"], []);
	const groups = cms.utils.dataGetter(operationRules, ["groups"], []);
	const users = cms.utils.dataGetter(operationRules, ["users"], []);
	if(typeof authentication !== "object") {
		authentication = {permissions:[],groups:[],user:[]};
	} else {
		if(!Array.isArray(authentication.permissions)) {
			authentication.permissions = []
		}
		if(!Array.isArray(authentication.groups)) {
			authentication.groups = []
		}
		if(typeof authentication.user !== "object") {
			authentication.user = {}
		}
	}
	cms.utils.debug("checking permission: (rules: " + operationRules.length, ", auth: " + Object.keys(authentication).reduce((o, k) => o = (o + "<"+k+"=" + ((k!=="user") ? authentication[k].length : "1") + ">"), "") + ")");
	if(Array.isArray(permissions) && (permissions.length !== 0)) {
		let canByPermissions = isRequired ? ___INVALIDATED : VALIDATED___;
		for(let index=0; index < authentication.permissions.length; index++) {
			const permission = authentication.permissions[index];
			if(permissions.indexOf(permission.name) !== -1) {
				canByPermissions = isRequired ? VALIDATED___ : ___INVALIDATED;
			}
		}
		if(canByPermissions === false) {
			cms.utils.debug("  · failed by permissions");
			return ___INVALIDATED;
		}
	}
	if(Array.isArray(groups) && (groups.length !== 0)) {
		let canByGroups = isRequired ? ___INVALIDATED : VALIDATED___;
		for(let index=0; index < authentication.groups.length; index++) {
			const group = authentication.groups[index];
			if(groups.indexOf(group.name) !== -1) {
				canByGroups = isRequired ? VALIDATED___ : ___INVALIDATED;
			}
		}
		if(canByGroups === false) {
			cms.utils.debug("  · failed by groups");
			cms.utils.debug("");
			return ___INVALIDATED;
		}
	}
	if(Array.isArray(users) && (users.length !== 0)) {
		let canByUsers = isRequired ? ___INVALIDATED : VALIDATED___;
		if(users.indexOf(authentication.user.name) !== -1) {
			canByUsers = isRequired ? VALIDATED___ : ___INVALIDATED;
		}
		if(canByUsers === false) {
			cms.utils.debug("  · failed by users");
			cms.utils.debug("");
			return ___INVALIDATED;
		}
	}
	cms.utils.debug("  · ok!");
	cms.utils.debug("");
	return VALIDATED___;
};