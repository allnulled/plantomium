module.exports = function() {
	const { cms, broadcast, socket } = this;
	console.log("SYNCHRONIZATION!")
	const emitSynchronizing = (...data) => {
		socket.emit("synchronizing", {type: "synchronizing event"}, ...data)
	};
	const emitSynchronized = (...data) => {
		socket.emit("synchronized", {type: "synchronized event"}, ...data)
	};
	setTimeout(emitSynchronizing, 1000, 50);
	setTimeout(emitSynchronizing, 2000, 60);
	setTimeout(emitSynchronizing, 3000, 70);
	setTimeout(emitSynchronized, 4000, 50);
}