const fs = require("fs");
const path = require("path");

module.exports = function(directory, socketPath = "/") {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	const server = cms.socket.server;
	const namespace = server.of(socketPath);
	namespace.on("connection", socket => {
		LL("User connected to " + socketPath);
		const eventsPath = path.resolve(directory, "on");
		const events = fs.readdirSync(eventsPath);
		for(let index=0; index < events.length; index++) {
			const eventFile = events[index];
			const eventPath = path.resolve(eventsPath, eventFile);
			const event = require(eventPath);
			const eventName = path.basename(eventFile).replace(/\-/g, "_").replace(/\.js$/g, "");
			const context = { socket, namespace, server, cms, directory, socketPath };
			LL("Adding event to " + socketPath + ": " + eventName);
			socket.on(eventName, event.bind(context));
		}
	});
	return namespace;
}