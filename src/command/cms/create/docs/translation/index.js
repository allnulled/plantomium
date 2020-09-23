/*
cms create docs translation --id "instalacion" --es "Instalación" --ca "Instal·lació" --en "Installation"
cms create docs translation --id "dependencias" --es "Dependencias" --ca "Dependències" --en "Dependencies"
cms create docs translation --id "estructura" --es "Estructura" --ca "Estructura" --en "Structure"
cms create docs translation --id "apis" --es "APIs" --ca "APIs" --en "APIs"
cms create docs translation --id "despliegue" --es "Despliegue" --ca "Desplegament" --en "Deployment"
cms create docs translation --id "comandos" --es "Comandos" --ca "Comandes" --en "Commands"
cms create docs translation --id "flujos-de-trabajo" --es "Flujos de trabajo" --ca "Fluxes de treball" --en "Fluxes of work"
cms create docs translation --id "debugando-y-trazando" --es "Debugando y trazando" --ca "Debugant i traçant" --en "Debugging and tracing"
cms create docs translation --id "hooks" --es "Hooks" --ca "Hooks" --en "Hooks"
cms create docs translation --id "plugins-y-markets" --es "Plugins y markets" --ca "Plugins i markets" --en "Plugins and markets"
cms create docs translation --id "referencia" --es "Referencia" --ca "Referència" --en "Reference"
cms create docs translation --id "sobrescritura-del-kernel" --es "Sobrescritura del kernel" --ca "Sobrescriptura del kernel" --en "Kernel overwrittings"
cms create docs translation --id "agradecimientos" --es "Agradecimientos" --ca "Agraïments" --en "Acknowledgement"
cms create docs translation --id "licencia" --es "Licencia" --ca "Llicència" --en "License"
cms create docs translation --id "versiones" --es "Versiones" --ca "Versions" --en "Versions"
//*/

const fs = require("fs");
const path = require("path");
const yargsParser = require("yargs-parser");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = function(argv) {
	const args = yargsParser(argv);
	const { id } = args;
	const languages = Object.keys(cms.i18n.translationTemplates);
	for(let indexLanguages=0; indexLanguages < languages.length; indexLanguages++) {
		const language = languages[indexLanguages];
		const keyPath = path.resolve(process.env.PROJECT_ROOT + `/docs/texts/${language}/project.docs/${id}.ejs`);
		if(language in args) {
			cms.utils.debug("creating translation at: " + keyPath.replace(process.env.PROJECT_ROOT, ""));
			fs.writeFileSync(keyPath, args[language], "utf8");
		}
	}
}