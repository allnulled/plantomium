const fs = require("fs");
const path = require("path");

module.exports = function(directory, socketPath = "/", middlewares = []) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.createSocket");
	const server = cms.socket.server;
	const subsocket = server.of(socketPath);
	if(!Array.isArray(middlewares)) {
		throw new Error("Required <middlewares> to be an array on <createSocket> [ERR:1309]");
	}
	if(middlewares.length !== 0) {
		subsocket.use((data, next) => {
			console.log("GOING!!!");
			next();
		});
		for(let index=0; index < middlewares.length; index++) {
			const middleware = middlewares[index];
			subsocket.use(middleware);
		}
		subsocket.use((data, next) => {
			console.log("OK!!!");
			next();
		});
	}
	const eventsPath = path.resolve(directory, "on");
	const events = fs.readdirSync(eventsPath);
	subsocket.on("connection", socket => {
		for(let index=0; index < events.length; index++) {
			const eventFile = events[index];
			const eventPath = path.resolve(eventsPath, eventFile);
			const event = require(eventPath);
			const eventName = path.basename(eventFile).replace(/\-/g, "_").replace(/\.js$/g, "");
			const context = { socket, subsocket, server, cms, directory, socketPath };
			LL(" ✓ Registering socket event <" + eventName + ">")
			socket.on(eventName, event.bind(context));
		}
	});
	LL(" ✓ Created subsocket <" + socketPath + ">")
	return subsocket;
}