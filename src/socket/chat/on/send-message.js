module.exports = function() {
	const { cms, server, socket } = this;
	socket.emit("send_message_answer", { data: 200 });
}