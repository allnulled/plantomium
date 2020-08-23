const path = require("path");
const ALL_PATTERN = [
	path.resolve(__dirname, "..", "index.js"),
	path.resolve(__dirname, "..", "src/*" + "*/*.js"),
];
const ALL_ORDERED = [
	path.resolve(__dirname, "..", "src/auth/actors/authenticate.js"),
	path.resolve(__dirname, "..", "src/auth/actors/logout.js"),
	path.resolve(__dirname, "..", "src/auth/actors/only-privileges.js"),
	path.resolve(__dirname, "..", "src/auth/actors/register.js"),
	path.resolve(__dirname, "..", "src/auth/actors/change.js"),
	path.resolve(__dirname, "..", "src/auth/actors/only-authenticated.js"),
	path.resolve(__dirname, "..", "src/auth/actors/only-users.js"),
	path.resolve(__dirname, "..", "src/auth/actors/unregister.js"),
	path.resolve(__dirname, "..", "src/auth/actors/confirm.js"),
	path.resolve(__dirname, "..", "src/auth/actors/only-groups.js"),
	path.resolve(__dirname, "..", "src/auth/actors/recover.js"),
	path.resolve(__dirname, "..", "src/auth/actors/login.js"),
	path.resolve(__dirname, "..", "src/auth/actors/only.js"),
	path.resolve(__dirname, "..", "src/auth/actors/refresh.js"),

]

module.exports = require("javadoc").generate({
    include: ALL_PATTERN,
    exclude: ["*" + "*/node_modules/*" + "*"],
    format: "markdown",
    output: path.resolve(__dirname, "..", "REFERENCE.md")
}).then(report => {
    console.log("[javadoc] REFERENCE.md is now " + report.length + " bytes long.");
    console.log("[javadoc] Everything OK.");
}).catch(error => {
	console.error("[ERROR]", error);
});