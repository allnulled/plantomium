const fs = require("fs");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const Client = require(process.env.PROJECT_ROOT + "/src/client/api.js");
const client = new Client();

module.exports = async function(argv) {
	let connection = undefined;
	try {
		cms.utils.trace("cms rest put");
		const args = require("yargs-parser")(argv);
		if(!("model" in args)) {
			throw new Error("Required <model> on <cms rest put> [ERR:7898]");
		}
		cms.utils.hasOnlyKeys(args, ["_", "model", "where", "values"]);
		if(typeof args.model !== "string") {
			throw new Error("Required <model> to be a string on <cms rest put> [ERR:1937]");
		}
		if(typeof args.where !== "string") {
			throw new Error("Required <where> to be a string (for prudence) on <cms rest put> [ERR:1185]");
		}
		if(typeof args.values !== "string") {
			throw new Error("Required <values> to be a string on <cms rest put> [ERR:1033]");
		}
		const authSession = cms.utils.requireOr(process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json", {});
		const { session_token } = authSession;
		client.setSessionToken(session_token);
		const where = cms.utils.toJsonOr(args.where, false);
		const values = cms.utils.toJsonOr(args.values, false);
		if(where === false) {
			throw new Error("Required <where> to be a jsonable string on <cms rest put> [ERR:2869]");
		} else if(values === false) {
			throw new Error("Required <values> to be a jsonable string on <cms rest put> [ERR:6469]");
		} else if(!Array.isArray(where)) {
			throw new Error("Required <where> to be a json array on <cms rest put> [ERR:5799]");
		} else if(typeof values !== "object" || Array.isArray(values)) {
			throw new Error("Required <values> to be a json object on <cms rest put> [ERR:3539]");
		}
		const putResponse = await client.api[args.model].putMany({where, data: values});
		const { app, meta, data, error } = putResponse.data;
		console.log("[Request:]");
		cms.utils.printSqlData([{app, ...meta}], true);
		if(error) {
			console.error(error);
			return console.error("[Error:] Sorry, there were errors on the request.");
		} else {
			console.log("[Status:]");
			cms.utils.printSqlData(data.operation, true);
		}
		cms.deploy.stopServer(cms);
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}