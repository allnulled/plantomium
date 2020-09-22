module.exports = require(__dirname + "/i18n.js").create({
	directories: [
		__dirname + "/service/{language}/{namespace}/{id}"
	]
});