const sqlString = require("sqlstring");

module.exports = function(item) {
	if(typeof item === "string") {
		return sqlString.escape(item.ref);
	} else if((typeof item === "object") && item.ref) {
		return sqlString.escapeId(item.ref);
	}
};