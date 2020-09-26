const ejs = require("ejs");

/**
 * 
 * ----
 * 
 * ### `/src/utils/render-file.js`
 * 
 * @name `renderFile`
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
module.exports = function(file, parameters = {}) {
	if (file) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("cms.utils.renderFile");
		return new Promise((ok, fail) => {
			const templateParameters = cms.utils.createParameters(parameters);
			ejs.renderFile(file, templateParameters, {}, (error, data) => {
				if (error) {
					cms.utils.debugError(error);
					return fail(error);
				}
				return ok(data);
			});
		});
	}
}