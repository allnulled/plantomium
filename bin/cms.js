#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const args = process.argv.splice(1);
args[0] = path.basename(args[0]);
const commandPath = path.join(args.join("/").split("--")[0], "index.js");
const commandPathAbsolute = path.resolve(__dirname, "..", "src/command", commandPath);
if(!fs.existsSync(commandPathAbsolute)) {
	throw new Error("Command not found at: " + commandPathAbsolute);
	return require(__dirname + "/print-help.js").call();
}
console.log("Executing...: " + commandPathAbsolute);
const command = require(commandPathAbsolute);
if(typeof command === "function") {
	command(args);
}