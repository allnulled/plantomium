/**
 * 
 * ----
 * 
 * ### `/src/router/auth.js`
 * 
 * @name `auth`
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
module.exports = function(cms, router) {
	const slug = cms.schema.general.slugForAuth || "/auth/v1";
	const postify = cms.rest.middlewares.postify;
	cms.utils.trace("cms.router.auth");
	cms.hooks.trigger("project.on-mount-auth-to-router");
	router.post(`${slug}/register`, postify, cms.auth.controllers.register());
	router.post(`${slug}/confirm`, postify, cms.auth.controllers.confirm());
	router.post(`${slug}/login`, postify, cms.auth.controllers.login());
	router.post(`${slug}/refresh`, cms.auth.middlewares.authenticate(), postify, cms.auth.controllers.refresh());
	router.post(`${slug}/logout`, cms.auth.middlewares.authenticate(), postify, cms.auth.controllers.logout());
	router.post(`${slug}/recover`, postify, cms.auth.controllers.recover());
	router.post(`${slug}/change`, postify, cms.auth.controllers.change());
	router.post(`${slug}/unregister`, cms.auth.middlewares.authenticate(), postify, cms.auth.controllers.unregister());
	cms.hooks.trigger("project.on-mounted-auth-to-router");
}