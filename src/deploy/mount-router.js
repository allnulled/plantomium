const express = require("express");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/mount-router.js`
 * 
 * @name `mountRouter`
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
	cms.utils.trace("cms.deploy.mountRouter");
	cms.hooks.trigger("project.on-mount-router");
	let noRouter = !cms.mountedRouter;
	cms.mountedRouter = cms.router();
	if(noRouter) {
		cms.app.use(cms.mountedRouter);
	}
	cms.hooks.trigger("project.on-mounted-router");
	return cms.mountedRouter;
};
