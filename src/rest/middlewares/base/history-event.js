const Middleware = require(__dirname + "/../middleware.js");

class HistoryEventBaseMiddleware extends Middleware {
	
	static get Table() {
		return "history_event";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/history-event.js")
	}

}

module.exports = HistoryEventBaseMiddleware;