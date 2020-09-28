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
		cms.utils.trace("cms rest get");
		const args = require("yargs-parser")(argv);
		if(!("model" in args)) {
			throw new Error("Required <model> on <cms rest get> [ERR:3708]");
		}
		cms.utils.hasOnlyKeys(args, ["_", "model", "where", "fields", "join", "order", "page", "limit", "search"]);
		if(typeof args.model !== "string") {
			throw new Error("Required <model> to be a string on <cms rest get> [ERR:1907]");
		}
		const authSession = cms.utils.requireOr(process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json", {});
		const { session_token } = authSession;
		client.setSessionToken(session_token);
		const getResponse = await client.api[args.model].getMany(args);
		const { app, meta, data, error } = getResponse.data;
		console.log("[Request:]");
		cms.utils.printSqlData([{app, ...meta}], true);
		if(error) {
			console.error(error);
			console.error("[Error:] Sorry, there were errors on the request.");
		} else {
			console.log("[Data:]");
			cms.utils.printSqlData(data.items, true);
			console.log("[Pagination:]");
			cms.utils.printSqlData([{total: data.total, ...data.input}], true);
		}
		cms.deploy.stopServer(cms);
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}