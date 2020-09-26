module.exports = function(obj, keys = []) {
	if(typeof obj !== "object") {
		throw new Error("Required <obj> to be an object on <only-object-keys> [ERR:1662]");
	}
	if(!Array.isArray(keys)) {
		throw new Error("Required <keys> to be an array on <only-object-keys> [ERR:1079]");
	}
	return Object.keys(obj).reduce(function(output, key) {
		if(keys.indexOf(key) !== -1) {
			output[key] = obj[key];
		}
		return output;
	}, {});
}