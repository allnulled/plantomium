#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const args = process.argv.splice(1);
const cms = require(__dirname + "/../src/cms.js");
args[0] = path.basename(args[0]);
const commandPath = path.join(args.join("/").split("--")[0], "index.js");
const commandPathAbsolute = path.resolve(__dirname, "..", "src/command", commandPath);
const exists = fs.existsSync(commandPathAbsolute);
if(!exists) {
	return require(__dirname + "/../src/command/cms/help/index.js").then(() => {
		return console.log("[ERROR] Command not found at:\n - " + commandPathAbsolute);
	}).catch(console.error);
}
const command = require(commandPathAbsolute);
if(typeof command === "function") {
	command(args);
}