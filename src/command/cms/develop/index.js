const { exec } = require("child_process");
const handleCommand = require(process.cwd() + "/src/utils/handle-command.js");

exec("npm run dev", handleCommand(console.log, console.error))
exec("sublime_text .", handleCommand(console.log, console.error))