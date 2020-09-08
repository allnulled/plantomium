module.exports = function(request = {}) {
	return {
		headers: request.headers,
		query: request.query,
		params: request.params,
		body: request.body,
	};
}