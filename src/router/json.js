module.exports = function(cms, router) {
	const jsonStores = [];

	////////////////////////////////////////
	// EXAMPLE:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/example",
		store: process.env.PROJECT_ROOT + "/src/json/data/example.json"
	}).mountToRouter(router);

	////////////////////////////////////////
	// SERVER:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/server",
		store: process.env.PROJECT_ROOT + "/src/json/data/server.json"
	}).mountToRouter(router);

	////////////////////////////////////////
	// UI:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/ui",
		store: process.env.PROJECT_ROOT + "/src/json/data/ui.json"
	}).mountToRouter(router);

	////////////////////////////////////////
	// AUTHORIZATION:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/authorization",
		store: process.env.PROJECT_ROOT + "/src/json/data/authorization.json"
	}).mountToRouter(router);
}