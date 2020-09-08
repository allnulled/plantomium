const socketio = require("socket.io");

module.exports = {
	factory(cms) {
		return { server: socketio(cms.server) };
	}
}