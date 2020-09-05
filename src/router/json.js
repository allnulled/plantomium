module.exports = function(cms, router) {
	cms.json.controllers.jsonStore.create({
		path: "/json/example",
		store: process.env.PROJECT_ROOT + "/src/json/data/example.json"
	}).mountToRouter(router);
}