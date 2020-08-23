const express = require("express");
const buildRoutes = require(__dirname + "/routes.js");

/**
 * 
 * ----
 * 
 * ### `/src/router/index.js`
 * 
 * @name `index`
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
	return function() {
		const router = express.Router();
		router.use(cms.utils.initializeFramework);
		buildRoutes(cms, router);
		return router;
	}
}