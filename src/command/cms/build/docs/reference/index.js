const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.command.cms.build.docs.reference");
const output = process.env.PROJECT_ROOT + "/docs/templates/REFERENCE.md";
module.exports = require("javadoc").generate({
	include: [
		process.env.PROJECT_ROOT + "/**/*.js", 
		process.env.PROJECT_ROOT + "/**/*.ejs", 
		process.env.PROJECT_ROOT + "/**/*.ts",
		process.env.PROJECT_ROOT + "/**/*.css",
		process.env.PROJECT_ROOT + "/**/*.scss",
		process.env.PROJECT_ROOT + "/**/*.sql",
	],
	exclude: [
		"**/node_modules/**"
	],
	format: "markdown",
	output
}).then(data => {
	cms.utils.debug(" ✓ Successfully compiled " + output.replace(process.env.PROJECT_ROOT, ""));
}).catch(cms.utils.debugError)