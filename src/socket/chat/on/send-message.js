const sqlString = require("sqlstring");

module.exports = function(message = {}) {
	const { subsocket, cms } = this;
	const { msg } = message;
	cms.rest.connection.query(`INSERT INTO chat_messages (message) VALUES (${sqlString.escape(msg)});`, function(error, data) {
		if(error) {
			subsocket.emit("message_error", error);
			return;
		}
		cms.socket.chat.emit("message_sent", message);
	});
}