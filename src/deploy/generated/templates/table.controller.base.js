const Controller = require(__dirname + "/../controller.js");

class <%-tableData.model%>BaseController extends Controller {
	
	static get Table() {
		return <%-JSON.stringify(table)%>;
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/<%-table.replace(/_/g, "-")%>.js")
	}

	static get Middleware() {
		return require(process.env.PROJECT_ROOT + "/src/rest/middlewares/<%-table.replace(/_/g, "-")%>.js")
	}

}

module.exports = <%-tableData.model%>BaseController;