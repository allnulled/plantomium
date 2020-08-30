const { exec } = require("child_process");
const handleCommand = require(process.cwd() + "/src/utils/handle-command.js");

exec("npm run test:reset", handleCommand(console.log, console.error))