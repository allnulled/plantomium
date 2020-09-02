const Middleware = require(__dirname + "/../middleware.js");

class HistoryDataBaseMiddleware extends Middleware {
	
	static get Table() {
		return "history_data";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/history-data.js")
	}

}

module.exports = HistoryDataBaseMiddleware;