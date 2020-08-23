const bcrypt = require("bcrypt");

/**
 * 
 * ----
 * 
 * ### `/src/utils/encrypt-password.js`
 * 
 * @name `encryptPassword`
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
module.exports = function(password, saltRounds = 10) {
	return new Promise(function(ok, fail) {
		if(typeof password !== "string") {
			throw new Error("Required <password> to be a string on encrypt-password")
		}
		bcrypt.hash(password, saltRounds, function(error, hash) {
			if(error) {
				return fail(error);
			}
			return ok(hash);
		});
	});
}