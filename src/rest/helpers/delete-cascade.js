module.exports = async function(data, ok, fail) {
	try {
		const { cms, parameters, handler } = data;
		const selectedCascade = cms.utils.dataGetter(parameters, ["results", 1], []);
		const cascadeDeleteData = cms.utils.dataGetter(cms, ["schema", "constraints", handler.actor.constructor.Table, "rest", "cascadeDelete"], undefined);
		if(typeof cascadeDeleteData === "undefined") {
			parameters.results.push(null);
			return ok();
		}
		if(!Array.isArray(cascadeDeleteData)) {

			return fail(new Error("Required <schema.constraints.*.rest.cascadeDelete> to be an array [ERR:035]"));
		}
		const originalIds = Array.from(
			new Set(
				cms.utils.dataGetter(parameters, ["results", 0], [])
				.map(result => result[handler.actor.constructor.Table + "." + "id"])
			)
		);
		if(originalIds.length === 0) {
			parameters.results.push(null);
			return ok();
		}
		for(let index=0; index < cascadeDeleteData.length; index++) {
			const cascadeDeleteRule = cascadeDeleteData[index];
			const { type: operationType, table, column } = cascadeDeleteRule;
			switch(operationType) {
				case "delete":
					const modelname = cms.utils.fromSnakeToCapitalCase(table || "");
					const restTableToDelete = cms.rest.actors[modelname];
					const results = await restTableToDelete.create().deleteMany({
						where: [
							[table + "." + column, "in", originalIds]
						]
					});
					parameters.results.push(results);
					break;
				case "update":
					throw new Error("Not supported yet <update> cascadeDelete rules [ERR:037]");
					break;
				default:
					throw new Error("Not supported yet <custom> cascadeDelete rules [ERR:036]");
					break;
			}
		}
		return ok();
	} catch(error) {
		return fail(error);
	}
}