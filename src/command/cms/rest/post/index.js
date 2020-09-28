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
		cms.utils.trace("cms rest post");
		const args = require("yargs-parser")(argv);
		if(!("model" in args)) {
			throw new Error("Required <model> on <cms rest post> [ERR:3448]");
		}
		cms.utils.hasOnlyKeys(args, ["_", "model", "values"]);
		if(typeof args.model !== "string") {
			throw new Error("Required <model> to be a string on <cms rest post> [ERR:7107]");
		}
		if(typeof args.values !== "string") {
			throw new Error("Required <values> to be a string on <cms rest post> [ERR:9201]");
		}
		const authSession = cms.utils.requireOr(process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json", {});
		const { session_token } = authSession;
		client.setSessionToken(session_token);
		const values = cms.utils.toJsonOr(args.values, false);
		let isPlural = false;
		const postResponse = await (function() {
			if(values === false) {
				throw new Error("Required <values> to be a jsonable string on <cms rest post> [ERR:8801]");
			} else if(Array.isArray(values)) {
				return client.api[args.model].postMany(values);
			} else if(typeof values === "object") {
				return client.api[args.model].postOne(values);
			} else {
				throw new Error("Required <values> to have a supportable format on <cms rest post> [ERR:3248]");
			}
		})();
		const { app, meta, data, error } = postResponse.data;
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