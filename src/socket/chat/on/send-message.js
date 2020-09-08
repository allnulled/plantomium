module.exports = function(message) {
	this.socket.emit("message_sent", message);
}