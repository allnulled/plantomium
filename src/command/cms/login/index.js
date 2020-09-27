const fs = require("fs");

module.exports = async function(argv) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	try {
		cms.utils.trace("cms login");
		const args = require("yargs-parser")(argv);
		if((!("name" in args)) && (!("email" in args))) {
			throw new Error("Required <user> or <email> on <cms login> [ERR:4855]");
		}
		if(!("password" in args)) {
			throw new Error("Required <password> on <cms login> [ERR:7069]");
		}
		const ClientSideAPI = require(process.env.PROJECT_ROOT + "/src/client/api.js");
		const client = new ClientSideAPI();
		const name = args.name;
		const email = args.email;
		const password = args.password;
		const {data:loginData=false} = await client.auth.login({ name, email, password });
		if(loginData) {
			fs.writeFileSync(process.env.PROJECT_ROOT + "/src/command/cms/auth/session.json", JSON.stringify(loginData, null, 4), "utf8");
		} else {
			console.log(loginResponse.data);
		}
	} catch(error) {
		if(typeof error === "object" && error.code === "ECONNREFUSED") {
			return console.error("[ERROR] Connection could not be stablished.");
		}
		console.error(error);
	}
}