const util = require("util");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const importFresh = require("import-fresh");
const colors = require("colors");

/**
 * 
 * ----
 * 
 * ### `/src/utils/index.js`
 * 
 * @name `index`
 * @type 
 * @has 
 * @uses 
 * @modifies 
 * @receives 
 * @returns 
 * @throws 
 * @description 
 * 
 */
module.exports = function(cms) {

	global.dd = function(...args) {
		for (let index = 0; index < args.length; index++) {
			const arg = args[index];
			console.log(util.inspect(arg, true, 5, true));
		}
		process.exit(9);
	}

	global.LL = function(...args) {
		console.log(...args);
	}

	cms.utils = {};

	cms.utils.state = {
		debug: false,
		trace: true,
	};

	cms.utils.trace = function(...args) {
		if (process.env.DEBUG_TRACES === "true") {
			console.log(colors.yellow("[TRACE]"), ...args);
		}
	};

	cms.utils.createParameters = function(parameters = {}) {
		cms.utils.trace("cms.utils.createParameters");
		const output = {
			sqlString: require("sqlstring"),
			process,
			require,
			ejs: require("ejs"),
			cms: require(process.env.PROJECT_ROOT + "/src/cms.js"),
			importFresh: require("import-fresh"),
			schema: require(process.env.PROJECT_ROOT + "/src/config/schema.virtual.js"),
			...parameters,
		};
		output.allParameters = output;
		//Object.assign(output, args);
		return output;
	};

	cms.utils.fromDashToCapitalCase = function(text) {
		// cms.utils.trace("cms.utils.fromDashToCapitalCase");
		return text.replace(/\-[a-z]/g, function(match) {
			return match.replace("-", "").toUpperCase();
		});
	};

	cms.utils.fromDashToSnakeCase = function(text) {
		// cms.utils.trace("cms.utils.fromDashToSnakeCase");
		return text.replace(/\-/g, "_");
	};

	cms.utils.fromSnakeToCapitalCase = function(text) {
		// cms.utils.trace("cms.utils.fromSnakeToCapitalCase");
		return text.replace(/\_[a-z]/g, function(match) {
			return match.replace("_", "").toUpperCase();
		});
	};

	cms.utils.fromCapitalToDashCase = function(text) {
		// cms.utils.trace("cms.utils.fromCapitalToDashCase");
		return text.replace(/[A-Z]/g, function(match) {
			return "-" + match.toLowerCase();
		});
	};

	cms.utils.pad = function(txt, min = 2, digit = "0") {
		cms.utils.trace("cms.utils.pad");
		let out = "";
		const str = txt + "";
		if (min > str.length) {
			const zeroes = min - str.length;
			let i = 0;
			while (i < zeroes) {
				i++;
				out += digit;
			}
		}
		out += str;
		return out;
	}

	cms.utils.requireDirectoryFile = function(directoryPath, filename, arg) {
		cms.utils.trace("cms.utils.requireDirectoryFile");
		const file = path.resolve(directoryPath, filename);
		if (!file.endsWith(".js")) {
			return {
				staticFile: file
			};
		}
		const fileId = cms.utils.fromDashToCapitalCase(path.basename(file)).replace(/\.js$/g, "");
		const factory = require(file);
		const hasSpecialValue = typeof factory === "object" && typeof factory.factory === "function";
		let value = factory;
		if (hasSpecialValue) {
			value = factory.factory.call(arg);
		}
		return value;
	}

	cms.utils.requireDirectory = function(directory, arg, exceptions = []) {
		cms.utils.trace("cms.utils.requireDirectory");
		const directoryPath = path.resolve(directory);
		const directoryFiles = fs.readdirSync(directoryPath);
		let data = {};
		const indexPosition = directoryFiles.indexOf("index.js");
		if (indexPosition !== -1) {
			directoryFiles.splice(indexPosition, 1);
			const index = cms.utils.requireDirectoryFile(directoryPath, "index.js", arg);
			if (typeof index === "object") {
				data = index;
			}
		}
		for (let index = 0; index < directoryFiles.length; index++) {
			const filename = directoryFiles[index];
			const file = path.resolve(directoryPath, filename);
			const fileStat = fs.lstatSync(file);
			if (fileStat.isFile()) {
				if (exceptions.indexOf(filename) === -1) {
					const fileId = cms.utils
						.fromDashToCapitalCase(path.basename(file))
						.replace(/^([0-9]+\.)+/g, "")
						.replace(/\.js$/g, "");
					data[fileId] = cms.utils.requireDirectoryFile(directoryPath, filename, arg);
				}
			}
		}
		return data;
	}

	cms.utils.requireTemplate = function(directory, file, options = {}) {
		cms.utils.trace("cms.utils.requireTemplate");
		const template = path.resolve(directory, file);
		const contents = fs.readFileSync(template).toString();
		return (parametersBrute = {}, options2 = {}) => {
			const parameters = cms.utils.createParameters(parametersBrute);
			return ejs.render(contents, parameters, { ...options,
				...options2
			});
		}
	};

	cms.utils.requireTemplatesDirectory = function(directory, options = {}) {
		cms.utils.trace("cms.utils.requireTemplatesDirectory");
		const directoryPath = path.resolve(directory);
		const directoryFiles = fs.readdirSync(directoryPath);
		const data = {};
		for (let index = 0; index < directoryFiles.length; index++) {
			const filename = directoryFiles[index];
			const file = path.resolve(directoryPath, filename);
			const fileStat = fs.lstatSync(file);
			if (fileStat.isFile()) {
				const fileId = cms.utils
					.fromDashToCapitalCase(path.basename(file))
					.replace(/^([0-9]+\.)+/g, "")
					.replace(/\.e?js$/g, "");
				data[fileId] = cms.utils.requireTemplate(directoryPath, filename, options);
			}
		}
		return data;
	}

	cms.utils.requireProcessDirectory = function(directory) {
		cms.utils.trace("cms.utils.requireHooksDirectory");
		return service = fs.readdirSync(directory).reduce(function(output, file) {
			const dirpath = path.resolve(directory, file);
			const filepath = path.resolve(directory, file, "index.js");
			const filestat = fs.lstatSync(filepath);
			if (filestat.isFile()) {
				output[file] = cms.utils.requireDirectoryFile(dirpath, "index.js", cms);
			}
			return output;
		}, {});
	};

	cms.utils.requireHooksDirectory = function(directory, hooks = {}) {
		cms.utils.trace("cms.utils.requireHooksDirectory");
		const directoryPath = path.resolve(directory);
		const directoryFiles = fs.readdirSync(directoryPath);
		for (let indexDirectories = 0; indexDirectories < directoryFiles.length; indexDirectories++) {
			const hookName = directoryFiles[indexDirectories];
			const hookDirectory = path.resolve(directoryPath, hookName);
			const hookItems = fs.readdirSync(hookDirectory);
			for (let indexItems = 0; indexItems < hookItems.length; indexItems++) {
				const hookId = hookItems[indexItems];
				const hookPath = path.resolve(hookDirectory, hookId);
				const hook = require(hookPath);
				if (!(hookName in hooks)) {
					hooks[hookName] = [];
				}
				hooks[hookName].push(hook);
			}
		}
		return hooks;
	};

	Object.assign(cms.utils, cms.utils.requireDirectory(__dirname))
	
	return cms.utils;
};