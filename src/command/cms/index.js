const fs = require("fs");
const path = require("path");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(__dirname + "/../../cms.js");
let message = "";

const isFile = function(absolutePath) {
	return new Promise((ok, fail) => fs.lstat(absolutePath, (error, stat) => {
		if(error) {
			return ok(false);
		}
		return ok(stat.isFile());
	}));
}

const readFolder = function(absolutePath) {
	return new Promise((ok, fail) => fs.readdir(absolutePath, asynchandler(ok, fail)));
}

const printHelp = async function(absolutePath) {
	try {
		const fileExists = await isFile(absolutePath + "/help.txt");
		if(fileExists) {
			const helpContents = await new Promise((ok, fail) => fs.readFile(absolutePath + "/help.txt", "utf8", asynchandler(ok, fail)));
			message += "\n - " + helpContents.replace(/(\[[^\]]+\])[^$]*/gm, "$1");
			console.log(helpContents);
		}
		return false;
	} catch(error) {
		console.error(error);
		throw error;
	}
}

const showHelp = async function(absolutePath) {
	try {
		if(!await isFile(absolutePath)) {
			await printHelp(absolutePath);
			const nodes = await readFolder(absolutePath);
			for(let i=0; i < nodes.length; i++) {
				const nodePath = path.resolve(absolutePath, nodes[i]);
				await showHelp(nodePath);
			}
		}
	} catch(error) {
		console.error(error);
		throw error;
	}
}

module.exports = showHelp(__dirname).then(ok => {
	console.log("[all commands]\n" + message + "\n");
})

