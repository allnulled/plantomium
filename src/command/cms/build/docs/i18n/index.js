const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.command.cms.build.docs.i18n");
const languages = Object.keys(cms.i18n.translationTemplates);
const templatesPath = process.env.PROJECT_ROOT + "/docs/templates";
const templates = fs.readdirSync(templatesPath)
	.map(file => path.resolve(templatesPath, file))
	.filter(file => file.endsWith(".md"))
	.map(file => {
		return {
			file,
			name: path.basename(file),
			contents: fs.readFileSync(file).toString()
		};
	});
let translationsNumber = 0;
for (let indexLanguage = 0; indexLanguage < languages.length; indexLanguage++) {
	const language = languages[indexLanguage];
	const _ = cms.i18n.createGetter({}, language, "project.docs").createFunction();
	for (let indexTemplate = 0; indexTemplate < templates.length; indexTemplate++) {
		const template = templates[indexTemplate];
		const {
			file,
			name,
			contents,
		} = template;
		try {
			const finalDocument = ejs.render(contents, Object.assign({
				_,
				file,
				name,
				contents,
				cms,
				path,
				ejs
			}), {
				delimiter: "@"
			});
			const fileOutput = process.env.PROJECT_ROOT + "/docs/" + name.replace(/\.md$/g, "") + "." + language + ".md";
			cms.utils.debug(" ✓ Translating file: " + fileOutput.replace(process.env.PROJECT_ROOT, ""));
			fs.writeFileSync(fileOutput, finalDocument, "utf8");
			translationsNumber++;
		} catch (error) {
			console.error(error);
		}
	}
}
cms.utils.debug(` ✓ Successfully translated ${translationsNumber} file(s).`);