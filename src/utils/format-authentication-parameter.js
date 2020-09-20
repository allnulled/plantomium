module.exports = function(authentication) {
	return typeof authentication !== "object" ? undefined : authentication;
};