const fs = require("fs");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.command.cms.build.docs.diagrams");

const commandSkm = 'skemator compile "docs/diagrams/*.skm"';
cms.utils.debug("[CMD]", commandSkm);
cms.utils.execSync(commandSkm);
const allDiagrams = fs.readdirSync(process.env.PROJECT_ROOT + "/docs/diagrams");
for(let index=0; index < allDiagrams.length; index++) {
	const mmdFile = allDiagrams[index];
	// Required installed globally:
	//     https://www.npmjs.com/package/mermaid.cli
	// Command in Linux:
	//     ~$ sudo npm install -g mermaid.cli --unsafe-perm
	if(mmdFile.endsWith(".mmd")) {
		const commandMmd = `mmdc -i "docs/diagrams/${mmdFile}" -o "docs/diagrams/${mmdFile.replace(/\.mmd$/g, "")}.png"`;
		cms.utils.debug("[CMD]", commandMmd);
		cms.utils.execSync(commandMmd);
	}
}
for(let index=0; index < allDiagrams.length; index++) {
	const plantumlFile = allDiagrams[index];
	// Required installed globally:
	//     https://www.npmjs.com/package/mermaid.cli
	// Command in Linux:
	//     ~$ sudo npm install -g skemator --unsafe-perm
	if(plantumlFile.endsWith(".plantuml")) {
		const commandPlantuml = `skemator compile:uml "docs/diagrams/${plantumlFile}"`;
		cms.utils.debug("[CMD]", commandPlantuml);
		cms.utils.execSync(commandPlantuml);
	}
}

cms.utils.debug(" ✓ Successfully compiled docs/diagrams");