const socketio = require("socket.io");

module.exports = {
	factory() {
		const cms = this;
		const socket = socketio(this.server).of("/chat");
		socket.on("connection", client => {
			const eventsPath = __dirname + "/on";
			const events = fs.readdirSync(eventsPath);
			for(let index=0; index < events.length; index++) {
				const eventFile = events[index];
				const eventPath = path.resolve(eventsPath, eventFile);
				const event = require(eventPath);
				const eventName = path.basename(eventFile).replace(/_/g, "-").replace(/\.js$/g, "");
				const context = { client, socket, cms };
				client.on(eventName, event.bind(context));
			}
		});
		return { socket };
	}
}