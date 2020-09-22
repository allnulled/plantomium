module.exports = function() {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.serializeDate");
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const millisecond = date.getMilliseconds();
	return `${year}${month}${day}.${hour}${minute}${second}.${millisecond}`;
}