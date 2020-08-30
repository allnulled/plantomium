const { exec } = require("child_process");
const handleCommand = require(process.cwd() + "/src/utils/handle-command.js");

exec("npm run start", handleCommand(console.log, console.error))