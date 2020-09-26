const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
module.exports = cms.utils.execSync("npm run dev", { cwd: process.env.PROJECT_ROOT });