const fs = require("fs-extra");
const ejs = require("ejs");
const path = require("path");
const asynchandler = require("@allnulled/asynchandler");
const commonPaths = {
	actor: path.resolve(__dirname + "/../templates/table.actor.js"),
	controller: path.resolve(__dirname + "/../templates/table.controller.js"),
	middleware: path.resolve(__dirname + "/../templates/table.middleware.js"),
	baseActor: path.resolve(__dirname + "/../templates/table.actor.base.js"),
	baseController: path.resolve(__dirname + "/../templates/table.controller.base.js"),
	baseMiddleware: path.resolve(__dirname + "/../templates/table.middleware.base.js"),
	sequelizeModel: path.resolve(__dirname + "/../templates/sequelize.model.js"),
	output: {
		actors: path.resolve(process.env.PROJECT_ROOT + "/src/rest/actors"),
		controllers: path.resolve(process.env.PROJECT_ROOT + "/src/rest/controllers"),
		middlewares: path.resolve(process.env.PROJECT_ROOT + "/src/rest/middlewares"),
		baseActors: path.resolve(process.env.PROJECT_ROOT + "/src/rest/actors/base"),
		baseControllers: path.resolve(process.env.PROJECT_ROOT + "/src/rest/controllers/base"),
		baseMiddlewares: path.resolve(process.env.PROJECT_ROOT + "/src/rest/middlewares/base"),
		sequelizeModels: path.resolve(process.env.PROJECT_ROOT + "/src/db/models"),
	}
};

module.exports = async function(args) {
	try {
		const schema = args.data["schema.virtual.js"];
		const tableNames = Object.keys(schema.columns);
		for (let index = 0; index < tableNames.length; index++) {
			const table = tableNames[index];
			const tableData = schema.constraints[table];
			const parameters = {
				schema,
				table,
				tableData
			};
			const promises = [
				commonPaths.actor,
				commonPaths.controller,
				commonPaths.middleware,
				commonPaths.baseActor,
				commonPaths.baseController,
				commonPaths.baseMiddleware,
				commonPaths.sequelizeModel,
			].map(file => new Promise(function(ok, fail) {
				ejs.renderFile(file, parameters, asynchandler(ok, fail));
			}));
			const templates = await Promise.all(promises);
			const actorPath = path.resolve(commonPaths.output.actors, table.replace(/_/g, "-") + ".js");
			const controllerPath = path.resolve(commonPaths.output.controllers, table.replace(/_/g, "-") + ".js");
			const middlewarePath = path.resolve(commonPaths.output.middlewares, table.replace(/_/g, "-") + ".js");
			const actorBasePath = path.resolve(commonPaths.output.baseActors, table.replace(/_/g, "-") + ".js");
			const controllerBasePath = path.resolve(commonPaths.output.baseControllers, table.replace(/_/g, "-") + ".js");
			const middlewareBasePath = path.resolve(commonPaths.output.baseMiddlewares, table.replace(/_/g, "-") + ".js");
			const sequelizeModelPath = path.resolve(commonPaths.output.sequelizeModels, table.replace(/_/g, "-") + ".js");
			fs.outputFileSync(actorPath, templates[0], "utf8");
			fs.outputFileSync(controllerPath, templates[1], "utf8");
			fs.outputFileSync(middlewarePath, templates[2], "utf8");
			fs.outputFileSync(actorBasePath, templates[3], "utf8");
			fs.outputFileSync(controllerBasePath, templates[4], "utf8");
			fs.outputFileSync(middlewareBasePath, templates[5], "utf8");
			fs.outputFileSync(sequelizeModelPath, templates[6], "utf8");
		}
	} catch (error) {
		throw error;
	}
}