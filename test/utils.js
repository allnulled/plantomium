module.exports = {
	url(target) {
		const newUrl = process.env.APP_URL + ":" + require("path").join(process.env.APP_PORT, target);
		console.log(newUrl)
		return newUrl;
	}
}