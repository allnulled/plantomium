module.exports = function(str, anchorKeys = {}) {
	let key = str.toLowerCase()
		.replace(/[^A-Za-z0-9\- ]/g, "")
		.replace(/ /g, "-");
	if(key in anchorKeys) {
		let notFound = true;
		let index = 0;
		while(notFound) {
			index++;
			const keyTmp = key + "-" + index;
			if(!(keyTmp in anchorKeys)) {
				key = keyTmp;
			}
		}
	}
	anchorKeys[key] = true;
	return key;
};