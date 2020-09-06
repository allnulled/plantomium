const util = require("util");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const importFresh = require("import-fresh");

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
		for(let index=0; index < args.length; index++) {
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

	cms.utils.createParameters = function(parameters = {}) {
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
		return text.replace(/\-[a-z]/g, function(match) {
			return match.replace("-", "").toUpperCase();
		});
	};

	cms.utils.fromDashToSnakeCase = function(text) {
		return text.replace(/\-/g, "_");
	};

	cms.utils.fromSnakeToCapitalCase = function(text) {
		return text.replace(/\_[a-z]/g, function(match) {
			return match.replace("_", "").toUpperCase();
		});
	};

	cms.utils.fromCapitalToDashCase = function(text) {
		return text.replace(/[A-Z]/g, function(match) {
			return "-" + match.toLowerCase();
		});
	};

	cms.utils.pad = function(txt, min = 2, digit = "0") {
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
		const directoryPath = path.resolve(directory);
		const directoryFiles = fs.readdirSync(directoryPath);
		let data = {};
		const indexPosition = directoryFiles.indexOf("index.js");
		if (indexPosition !== -1) {
			directoryFiles.splice(indexPosition, 1);
			const index = cms.utils.requireDirectoryFile(directoryPath, "index.js");
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
					data[fileId] = cms.utils.requireDirectoryFile(directoryPath, filename);
				}
			}
		}
		return data;
	}

	cms.utils.requireTemplate = function(directory, file, options = {}) {
		const template = path.resolve(directory, file);
		const contents = fs.readFileSync(template).toString();
		return (parametersBrute = {}) => {
			const parameters = cms.utils.createParameters(parametersBrute);
			return ejs.render(contents, parameters, options);
		}
	};

	cms.utils.requireTemplatesDirectory = function(directory, options = {}) {
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

	Object.assign(cms.utils, cms.utils.requireDirectory(__dirname))

	return cms.utils;
};