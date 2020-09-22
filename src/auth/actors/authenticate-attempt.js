const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

module.exports = (...params) => {
	cms.utils.trace("cms.auth.actors.authenticateAttempt")
	return cms.auth.actors.authenticate(...params).catch(error => error);
};
