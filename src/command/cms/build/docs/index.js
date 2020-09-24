const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const { execSync } = cms.utils;
cms.utils.trace("cms.command.cms.build.docs");
execSync("cms build docs reference");
execSync("cms build docs diagrams");
execSync("cms build docs books");
execSync("cms build docs i18n");