module.exports = function(authentication) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.formatAuthenticationParameter");
	const isNotObject = typeof (authentication) !== "object";
	const isNull = authentication === null;
	return (isNotObject || isNull) ? undefined : authentication;
};