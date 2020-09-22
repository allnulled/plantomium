module.exports = function() {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getSchemaMainTables");
	const mainGeneral = cms.utils.dataGetter(cms, ["schema", "general", "mainTables"], []);
	const mainSpecific = Object.keys(cms.schema.constraints).reduce((out, tablename) => {
		const isMain = cms.utils.dataGetter(cms, ["schema", "constraints", tablename, "rest", "isMain"], !tablename.startsWith("combo_"));
		if(isMain) {
			out.push(tablename);
		}
		return out;
	}, []);
	const mainTables = [].concat(mainGeneral).concat(mainSpecific);
	return mainTables;
}