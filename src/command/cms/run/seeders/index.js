const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
module.exports = cms.utils.execSync("sequelize-cli db:seed:all", { cwd: process.env.PROJECT_ROOT });