const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = function(eventname, identifier) {
	cms.utils.trace("cms.hooks.remove");
	
	if(typeof eventname !== "string") {
		throw new Error("Required <eventname> to be a string on <cms.hooks.remove> [ERR:6085]");
	}
	if(!(eventname in cms.hooks.service)) {
		return false;
	}
	if(typeof identifier === "string") {
		const length1 = cms.hooks.service[eventname].length;
		cms.hooks.service[eventname] = cms.hooks.service[eventname].filter(hook => hook.name !== identifier);
		const length2 = cms.hooks.service[eventname].length;
		return length2 - length1;
	}
	delete cms.hooks.service[eventname];
	return 1;
}