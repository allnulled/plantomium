const express = require("express");

/**
 * 
 * ----
 * 
 * ### `/src/deploy/create-app.js`
 * 
 * @name `createApp`
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
	cms.app = express();
	cms.app.use(require("method-override")("_method"));
	cms.app.use(cms.utils.initializeFramework);
	return cms.app;
}