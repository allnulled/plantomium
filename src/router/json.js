module.exports = function(cms, router) {
	cms.utils.trace("cms.router.json");
	cms.hooks.trigger("project.on-mount-json");
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
		store: process.env.PROJECT_ROOT + "/src/config/server.json"
	}).mountToRouter(router);

	////////////////////////////////////////
	// UI:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/ui",
		store: process.env.PROJECT_ROOT + "/src/config/ui.json"
	}).mountToRouter(router);

	////////////////////////////////////////
	// AUTHORIZATION:
	cms.json.controllers.jsonStore.create({
		path: "/json/v1/authorization",
		store: process.env.PROJECT_ROOT + "/src/config/authorization.json"
	}).mountToRouter(router);
	cms.hooks.trigger("project.on-mounted-json");
}