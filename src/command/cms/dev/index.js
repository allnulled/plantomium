const { exec } = require("child_process");
const handleCommand = require(process.cwd() + "/src/utils/handle-command.js");
exec("sublime_text SPRINT.md", handleCommand(console.log, console.error))