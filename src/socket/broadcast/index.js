const fs = require("fs");
const path = require("path");

const say = msg => (data, next) => console.log(msg) || next()

module.exports = {
	factory() {
		return this.utils.createSocket(__dirname, "/broadcast", [
			say("GOOOOO"),
			this.auth.middlewares.onlySocket({ permissions: ["to administrate"] }),
			say("OKKKKK")
		]);
	}
}


