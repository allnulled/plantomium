module.exports = (request, defaultValue = 0) => {
	if((typeof request !== "undefined") && (typeof request.fw !== "undefined") && (typeof request.fw.auth !== "undefined")) {
		return request.fw.auth;
	}
	return defaultValue;
};