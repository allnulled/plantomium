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
		// cms.utils.trace("cms.utils.pad");
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

	cms.utils.padEnd = function(txt, min = 2, digit = "0") {
		// cms.utils.trace("cms.utils.pad");
		let out = "";
		const str = txt + "";
		out += str;
		if (min > str.length) {
			const zeroes = min - str.length;
			let i = 0;
			while (i < zeroes) {
				i++;
				out += digit;
			}
		}
		return out;
	}

	cms.utils.requireDirectoryFile = function(directoryPath, filename, arg) {
		// cms.utils.trace("cms.utils.requireDirectoryFile");
		const file = path.resolve(directoryPath, filename);
		cms.utils.trace("  · " + file.replace(process.env.PROJECT_ROOT, "") + " (as DirectoryFile)");
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
		// cms.utils.trace("cms.utils.requireDirectory");
		const directoryPath = path.resolve(directory);
		cms.utils.trace("  · " + directoryPath.replace(process.env.PROJECT_ROOT, "") + " (as Directory)");
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
		// cms.utils.trace("cms.utils.requireTemplate");
		const template = path.resolve(directory, file);
		cms.utils.trace("  · " + template.replace(process.env.PROJECT_ROOT, "") + " (as Template)");
		const contents = fs.readFileSync(template).toString();
		return (parametersBrute = {}, options2 = {}) => {
			const parameters = cms.utils.createParameters(parametersBrute);
			return ejs.render(contents, parameters, { ...options,
				...options2
			});
		}
	};

	cms.utils.requireTemplatesDirectory = function(directory, options = {}) {
		// cms.utils.trace("cms.utils.requireTemplatesDirectory");
		const directoryPath = path.resolve(directory);
		cms.utils.trace("  · " + directoryPath.replace(process.env.PROJECT_ROOT, "") + " (as TemplatesDirectory)");
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
		// cms.utils.trace("cms.utils.requireHooksDirectory");
		const directoryPath = path.resolve(directory);
		cms.utils.trace("  · " + directoryPath.replace(process.env.PROJECT_ROOT, "") + " (as ProcessDirectory)");
		return service = fs.readdirSync(directoryPath).reduce(function(output, file) {
			const dirpath = path.resolve(directoryPath, file);
			const filepath = path.resolve(directoryPath, file, "index.js");
			const filestat = fs.lstatSync(filepath);
			if (filestat.isFile()) {
				output[file] = cms.utils.requireDirectoryFile(dirpath, "index.js", cms);
			}
			return output;
		}, {});
	};

	cms.utils.requireHooksDirectory = function(directory, appendAsHooksServices = true) {
		// cms.utils.trace("cms.utils.requireHooksDirectory");
		const hooks = {};
		const directoryPath = path.resolve(directory);
		cms.utils.trace("  · " + directoryPath.replace(process.env.PROJECT_ROOT, "") + " (as HooksDirectory)")
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
		if(appendAsHooksServices) {
			Object.assign(cms.hooks.service, hooks);
		}
		return hooks;
	};

	cms.utils.requirePluginsDirectory = function(directory) {
		const plugins = {};
		const pluginsPath = path.resolve(directory);
		const vendors = fs.readdirSync(pluginsPath);
		cms.utils.trace("  · " + pluginsPath.replace(process.env.PROJECT_ROOT, "") + " (as PluginsDirectory)")
		for (let index = 0; index < vendors.length; index++) {
			const vendor = vendors[index];
			const vendorPath = path.resolve(pluginsPath, vendor);
			const pluginNames = fs.readdirSync(vendorPath);
			for (let index = 0; index < pluginNames.length; index++) {
				const pluginName = pluginNames[index];
				const pluginPath = path.resolve(pluginsPath, vendor, pluginName, "plugin.json");
				const pluginIndexPath = path.resolve(pluginsPath, vendor, pluginName, "index.js");
				const data = importFresh(pluginPath);
				const execution = require(pluginIndexPath);
				const pluginId = vendor + "/" + pluginName;
				if(pluginId in plugins) {
					throw new Error("One plugin was already loaded with the same name [ERR:759]");
				}
				plugins[pluginId] = {
					vendor,
					name: pluginName,
					plugin: data,
					execution,
				};
			}
		}
		return plugins;
	};

	cms.utils.requireTranslationsDirectory = function(directory, output = {}) {
		cms.utils.trace("  · " + directory.replace(process.env.PROJECT_ROOT, "") + " (as TranslationsDirectory)")
		const languages = fs.readdirSync(directory);
		for(let indexLang=0; indexLang < languages.length; indexLang++) {
			const langKey = languages[indexLang];
			const lang = path.resolve(directory, langKey);
			const nspaces = fs.readdirSync(lang);
			for(let indexNspace=0; indexNspace < nspaces.length; indexNspace++) {
				const nsKey = nspaces[indexNspace];
				const nspace = path.resolve(lang, nsKey);
				const strings = fs.readdirSync(nspace);
				for(let indexStr=0; indexStr < strings.length; indexStr++) {
					const key = strings[indexStr];
					const str = path.resolve(nspace, key);
					if(!(langKey in output)) {
						output[langKey] = {};
					}
					if(!(nsKey in output[langKey])) {
						output[langKey][nsKey] = {};
					}
					const strKey = key.replace(/\.ejs$/g, "")
					const contents = fs.readFileSync(str).toString();
					output[langKey][nsKey][strKey] = contents;
				}
			}
		}
		return output;
	}

	Object.assign(cms.utils, cms.utils.requireDirectory(__dirname))

	return cms.utils;
};