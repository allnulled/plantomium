module.exports = function(file, defaultValue = undefined) {
	try {
		return require(file);
	} catch (error) {
		return defaultValue;
	}
};