const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const path = require("path");
const pathCrt = path.resolve(process.env.PROJECT_ROOT, process.env.SECURE_SITE_CRT);
const pathKey = path.resolve(process.env.PROJECT_ROOT, process.env.SECURE_SITE_KEY);
const command = `openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out ${JSON.stringify(pathCrt)} -keyout ${JSON.stringify(pathKey)} -subj "/C=SP/ST=CAT/L=Barcelona/O=Open Source Community/OU=Development/CN=The developer/emailAddress=${process.env.EMAIL_USER}"`;
console.log(command);
cms.utils.execSync(command)