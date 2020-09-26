const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

/**
 * 
 * ----
 * 
 * ### `/src/utils/generate-token.js`
 * 
 * @name `generateToken`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(length = 256, alphabet = ALPHABET) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.generateToken");
	let out = "";
	for(let index=0; index < length; index++) {
		const ch = alphabet[Math.floor(Math.random() * alphabet.length)];
		out += ch;
	}
	return out;
}