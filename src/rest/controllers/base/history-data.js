const Controller = require(__dirname + "/../controller.js");

class HistoryDataBaseController extends Controller {
	
	static get Table() {
		return "history_data";
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/history-data.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/history-data.js")
	}

}

module.exports = HistoryDataBaseController;