const fs = require("fs");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const sqlString = require("sqlstring");
const asynchandler = require("@allnulled/asynchandler");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = async function(argv) {
	let connection = undefined;
	try {
		cms.utils.trace("cms add permission");
		dd("Not yet")
	} catch(error) {
		console.error(error);
		cms.deploy.stopServer(cms);

	}
}