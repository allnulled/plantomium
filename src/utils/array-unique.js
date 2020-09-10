module.exports = function(array) {
	if(!Array.isArray(array)) {
		throw new Error("Required <array> to be an array on <arrayUnique> [ERR:522]");
	}
	return array.filter((value, index, self) => self.indexOf(value) === index);
}