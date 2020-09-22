const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const socketio = require("socket.io");

cms.utils.trace("cms.socket");

module.exports = {
	factory(cms) {
		return { server: socketio(cms.server) };
	}
}