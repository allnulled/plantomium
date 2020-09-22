const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = function(eventname, hook) {
	cms.utils.trace("cms.hooks.add");
	if(typeof eventname !== "string") {
		throw new Error("Required <eventname> to be a string on <cms.hooks.add> [ERR:529]");
	}
	let isNew = true;
	if(!(eventname in cms.hooks.service)) {
		cms.hooks.service[eventname] = [];
		isNew = false;
	}
	cms.hooks.service[eventname].push(hook);
	return isNew;
}