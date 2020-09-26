module.exports = function(fieldsParam) { 
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.formatFieldsParameters");
	let fieldsTmp = fieldsParam;
	if(typeof fieldsTmp === "string") {
		fieldsTmp = JSON.parse(fieldsTmp);
	} else if(typeof fieldsTmp === "undefined") {
		fieldsTmp = [];
	}
	if(!Array.isArray(fieldsTmp)) {
		throw new Error("Required <fields> to be an array [ERR:5912]");
	}
	return fieldsTmp;
};
