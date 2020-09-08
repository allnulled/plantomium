module.exports = function(data, ok) {
	const { cms, server, socket } = this;
	return ok("message received:" + data.msg);
}