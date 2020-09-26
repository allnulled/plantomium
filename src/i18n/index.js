module.exports = require(__dirname + "/i18n.js").create({
	directories: [
		process.env.PROJECT_ROOT + "/docs/texts/{language}/{namespace}/{id}"
	]
});