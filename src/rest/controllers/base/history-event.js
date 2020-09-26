const Controller = require(__dirname + "/../controller.js");

class HistoryEventBaseController extends Controller {
	
	static get Table() {
		return "history_event";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/history-event.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/history-event.js")
	}

}

module.exports = HistoryEventBaseController;