const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

/**
 * 
 * ----
 * 
 * ### `/src/auth/middlewares/authenticate.js`
 * 
 * @name `authenticate`
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
module.exports = function(options = {}) {
	return async function(request, response, next) {
		try {
			if(request.fw.data.auth) {
				return next();
			}
			let session_token = cms.utils.formatBearerToken(request.headers.authorization, null);
			const data = await cms.auth.actors.authenticate({ session_token });
			request.fw.data.auth = data;
			request.fw.data.authToken = session_token;
			return next();
		} catch (error) {
			if(options.redirectTo) {
				if(typeof options.redirectTo === "string") {
					return response.redirect(options.redirectTo);
				} else if(typeof options.redirectTo === "function") {
					return await options.redirectTo(error, request, response, next, {cms, options});
				}
			}
			cms.utils.erroneousJsonResponse(error, request, response, next);
		}
	}
}