const fs = require("fs");
const path = require("path");

module.exports = {
	factory() {
		return this.utils.createSocket(__dirname, "/broadcast");
	}
}


