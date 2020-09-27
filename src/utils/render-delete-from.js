const asynchandler = require("@allnulled/asynchandler");
const ejs = require("ejs");
const sqlString = require("sqlstring");

module.exports = function(table, args, validKeys = []) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const keys = Object.keys(args).filter(key => validKeys.indexOf(key) !== -1).map(key => [key, args[key]]);
	if(keys.length === 0) {
		throw new Error("Required <keys> to have at least 1 item on <renderDeleteFrom> [ERR:4991]");
	}
	return ejs.render(`
		DELETE
		  FROM <%-sqlString.escapeId(table);%> 
		  WHERE <%
			for(let index=0; index < keys.length; index++) {
				const item = keys[index];
				const [key, value] = item;
				%><%-index === 0 ? "" : "AND "%><%-sqlString.escapeId(key)%> = <%-sqlString.escape(value)%>
				<%
			}
		%>;`, { table, keys, sqlString });
}