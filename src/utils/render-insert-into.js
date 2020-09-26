const asynchandler = require("@allnulled/asynchandler");
const ejs = require("ejs");
const sqlString = require("sqlstring");

module.exports = function(table, args, validKeys = []) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const keys = Object.keys(args).filter(key => validKeys.indexOf(key) !== -1);
	const values = Object.values(cms.utils.onlyObjectKeys(args, keys));
	return ejs.render(`
		INSERT INTO <%-sqlString.escapeId(table);%> (
				<%
			for(let index=0; index < keys.length; index++) {
				const key = keys[index];
				%><%-sqlString.escapeId(key)%><%-(index+1) === keys.length ? "" : ","%>
				<%
			}
				%>
		) VALUES (
				<%	
			for(let index=0; index < values.length; index++) {
				const value = values[index];
				%><%-sqlString.escape(value)%><%-(index+1) === values.length ? "" : ","%>
				<%
			}
				%>
		);`, { table, keys, values, sqlString });
}