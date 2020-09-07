module.exports = function() {
	const { cms, server, socket } = this;
	socket.emit("update_data_answer", { data: 100 });
}