const fs = require("fs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const output = process.env.PROJECT_ROOT + "/docs/templates/REFERENCE.md";

cms.utils.trace("cms.command.cms.build.docs.reference");

const getIndexation = function(titles) {
	let indexation = '# <@-_("reference")@>\n\n';
	if(titles.length) {
		indexation += '## <@-_("index")@>\n\n'
	}
	for(let index=0; index < titles.length; index++) {
		const {title, link} = titles[index];
		indexation += `  - [<@-_(${JSON.stringify(title)})@>](#<@-cms.utils.toAnchor(_(${JSON.stringify(title)}))@>)\n`;
		
	}
	return indexation + "\n";
}

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
	const outputContents = fs.readFileSync(output).toString();
	const indexationRegex = /\-\-\-\-[\r\n]+\#\#\# +(\`\/[^\r\n]+)/g;
	const matches = [...outputContents.matchAll(indexationRegex)];
	const titles = [];
	for(let index=0; index < matches.length; index++) {
		const match = matches[index];
		const title = match[1].replace(/\`$/g, "").replace("`/", "");
		const link = cms.utils.toAnchor(title);
		titles.push({ title, link });
	}
	outputIndexed = getIndexation(titles) + outputContents;
	fs.writeFileSync(output, outputIndexed, "utf8");
	cms.utils.debug(" ✓ Successfully compiled " + output.replace(process.env.PROJECT_ROOT, ""));
}).catch(cms.utils.debugError)