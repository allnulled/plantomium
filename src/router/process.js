module.exports = function(cms, router) {
	const processNames = Object.keys(cms.process.service).filter(processName => !processName.startsWith("$"));
	for (let index = 0; index < processNames.length; index++) {
		const processName = processNames[index];
		const processItem = cms.process.service[processName];
		processItem.mountToRouter(router);
	}
}