const asynchandler = require("@allnulled/asynchandler");
const ejs = require("ejs");
const sqlString = require("sqlstring");

const onReduceFields = function(output, field, index) {
	if (index !== 0) {
		output += ",\n  ";
	}
	output += sqlString.escapeId(field);
	return output;
};

const onReduceJoins = function(output, join) {
	const [joinOn, whereSubjectColumn, whereOperator, whereObjectColumn, alias = false] = join;
	output += `  JOIN ${sqlString.escapeId(joinOn)}${alias ? " AS " + sqlString.escapeId(alias) : ""}\n`;
	output += `    ON ${sqlString.escapeId(whereSubjectColumn)} ${whereOperator} ${sqlString.escapeId(whereObjectColumn)} \n`;
	return output;
};

const onReduceWheres = function(output, where, index) {
	const [whereSubjectColumn, whereOperator, whereObjectColumn, alias = false] = where;
	if (index === 0) {
		output += "  WHERE ";
	} else {
		output += "\n  AND ";
	}
	output += `${sqlString.escapeId(whereSubjectColumn)} ${whereOperator} ${sqlString.escapeId(whereObjectColumn)}`;
	return output;
};

const onReduceGroups = function(output, where) {
	// @TODO...
};

const onReduceOrders = function(output, where) {
	// @TODO...
};

const onReduceLimits = function(output, where) {
	// @TODO...
};

const onReduceOffsets = function(output, where) {
	// @TODO...
};

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