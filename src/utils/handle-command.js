module.exports = (ok, fail, done) => (error, stdout, stderr) => {
	if (error) {
		return (typeof done === "function") ? done(error) : fail(error);
	}
	if (stderr) {
		return (typeof done === "function") ? done(null, stderr) : ok(stderr);
	}
	return (typeof done === "function") ? done(null, stdout) : ok(stdout);
};