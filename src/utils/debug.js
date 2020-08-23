/**
 * 
 * ----
 * 
 * ### `/src/utils/debug.js`
 * 
 * @name `debug`
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
module.exports = function(cms) {
	return function(...args) {
		if(cms.utils.state.debug) {
			console.log("[DEBUG]",...args);
		}
	};
}