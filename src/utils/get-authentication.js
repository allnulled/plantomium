module.exports = (request, defaultValue = 0) => {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getAuthentication");
	if((typeof request !== "undefined") && (typeof request.fw !== "undefined") && (typeof request.fw.auth !== "undefined")) {
		return request.fw.auth;
	}
	return defaultValue;
};