const Middleware = require(__dirname + "/../middleware.js");

class <%-tableData.model%>BaseMiddleware extends Middleware {
	
	static get Table() {
		return <%-JSON.stringify(table)%>;
	}

	static get Actor() {
		return require(process.env.PROJECT_ROOT + "/src/rest/actors/<%-table.replace(/_/g, "-")%>.js")
	}

}

module.exports = <%-tableData.model%>BaseMiddleware;