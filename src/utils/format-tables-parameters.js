module.exports = function(tablesParam) {
	return typeof tablesParam === "string" ? [tablesParam] : tablesParam;
};