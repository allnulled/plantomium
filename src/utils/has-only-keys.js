module.exports = function(data, validKeys = []) {
	if(typeof data !== "object") {
		throw new Error("Required <data> to be an object on <hasOnlyKeys> [ERR:1187]");
	}
	if(!Array.isArray(validKeys)) {
		throw new Error("Required <validKeys> to be an array on <hasOnlyKeys> [ERR:1188]");
	}
	const currentKeys = Object.keys(data);
	for(let index=0; index < currentKeys.length; index++) {
		const currentKey = currentKeys[index];
		if(validKeys.indexOf(currentKey) === -1) {
			throw new Error(`Invalid property <${currentKey}> on <hasOnlyKeys> [ERR:4001]`);
		}
	}
	return true;
}