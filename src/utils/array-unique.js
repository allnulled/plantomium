module.exports = function(array) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.arrayUnique");
	if(!Array.isArray(array)) {
		throw new Error("Required <array> to be an array on <arrayUnique> [ERR:522]");
	}
	return array.filter((value, index, self) => self.indexOf(value) === index);
}