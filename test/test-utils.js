module.exports = {
	url(target) {
		return process.env.APP_URL + ":" + process.env.APP_PORT + target;
	}
}