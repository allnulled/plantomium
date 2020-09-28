module.exports = function(str) {
	try {
		return JSON.parse(str);
	} catch (error) {
		return false;
	}
};