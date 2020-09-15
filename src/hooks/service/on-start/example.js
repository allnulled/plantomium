module.exports = {
	name: "Example hook",
	description: "This is a dummy demo hook",
	hook(parameters, context, cms) {
		const analysis = {};
		const analysisJson = JSON.stringify(analysis);
		require("fs").writeFileSync(process.env.PROJECT_ROOT + "/analysis.txt", analysisJson, "utf8");
	},
	priority: 1000,
}