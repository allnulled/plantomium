module.exports = {
	name: "On event three hook",
	description: "This is a dummy demo hook for testing purposes",
	hook(parameters, context, cms) {
		const analysis = {};
		const analysisJson = JSON.stringify(analysis);
		require("fs").writeFileSync(process.env.PROJECT_ROOT + "/event-three.txt", analysisJson, "utf8");
	},
	priority: 1000,
}