const asynchandler = require("@allnulled/asynchandler");
const ejs = require("ejs");
const sqlString = require("sqlstring");

module.exports = function(parameters) {
	const {
		table = undefined,
			fields: fieldsParamOriginal = undefined,
			where: whereParamOriginal = undefined,
			join: joinParamOriginal = undefined,
			group: groupParamOriginal = undefined,
			order: orderParam = undefined,
			limit: limitParam = undefined,
			offset: offsetParam = undefined,
			page: pageParam = 1
	} = parameters;
	const fieldsParam = typeof fieldsParamOriginal === "string" ? JSON.parse(fieldsParamOriginal) : fieldsParamOriginal;
	const whereParam = typeof whereParamOriginal === "string" ? JSON.parse(whereParamOriginal) : whereParamOriginal;
	const joinParam = typeof joinParamOriginal === "string" ? JSON.parse(joinParamOriginal) : joinParamOriginal;
	const groupParam = typeof groupParamOriginal === "string" ? JSON.parse(groupParamOriginal) : groupParamOriginal;
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const fields = Array.isArray(fieldsParam) ? fieldsParam : [];
	const join = Array.isArray(joinParam) ? joinParam : [];
	const where = Array.isArray(whereParam) ? whereParam : [];
	const group = Array.isArray(groupParam) ? groupParam : [];
	const sort = Array.isArray(orderParam) ? orderParam : [];
	const limit = Number.isInteger(limitParam) ? limitParam : undefined;
	const offset = Number.isInteger(offsetParam) ? offsetParam : undefined;
	const page = Number.isInteger(pageParam) ? pageParam : undefined;
	return ejs.renderFile(__dirname + "/templates/select-from.ejs", {
		cms,
		auth: undefined,
		table,
		fields,
		join,
		where,
		group,
		sort,
		limit,
		offset,
		page,
		sqlString
	});
}