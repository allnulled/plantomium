const fs = require("fs");
const path = require("path");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = function(argv) {
	const args = require("yargs-parser")(argv);
	const { id } = args;
	const langs = Object.keys(cms.i18n.translationTemplates);
	for(let index=0; index < langs.length; index++) {
		const lang = langs[index];
		if(lang in args) {
			const keyPath = path.resolve(process.env.PROJECT_ROOT + `/docs/texts/${lang}/project.docs/${id}.ejs`);
			try {
				cms.utils.debug("creating translation at:");
				cms.utils.debug("  · " + keyPath.replace(process.env.PROJECT_ROOT, ""));
				fs.writeFileSync(keyPath, args[lang], "utf8");
			} catch(error) {
				console.error(error);
			}
		}
	}
}