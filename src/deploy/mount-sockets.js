/**
 * 
 * ----
 * 
 * ### `/src/deploy/mount-sockets.js`
 * 
 * @name `mountSockets`
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
	cms.utils.trace("cms.deploy.mountSockets");
	////////////////////////
	cms.socket = require(process.env.PROJECT_ROOT + "/src/socket/index.js").factory(cms);
	cms.socket.broadcast = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/socket/broadcast", cms);
	cms.socket.chat = cms.utils.requireDirectory(process.env.PROJECT_ROOT + "/src/socket/chat", cms);
}