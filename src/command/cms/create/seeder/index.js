const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
module.exports = cms.utils.execSync("sequelize-cli seed:generate", { cwd: process.env.PROJECT_ROOT });