<%

const schemaFilename = require("path").basename(process.env.SCHEMA_VIRTUAL_OUTPUT);
const schema = parameters.data[schemaFilename];
const tableNames = Object.keys(schema.columns);
const baseURL = process.env.APP_URL;
const entities = tableNames.reduce((output, tableName) => {
	const table = tableName;
	const endpoint = `/${tableName.replace(/_/g, "-")}`;
	const camel = tableName.replace(/_./g, match => match.substr(1).toUpperCase());
	const capital = camel.substr(0,1).toUpperCase() + camel.substr(1);
	const tableData = schema.constraints[tableName];
	const columnsData = schema.columns[tableName];
	return Object.assign(output, {
		[capital]: {
			table,
			endpoint,
			camel,
			capital,
			attributes: tableData.attributes.reduce((output, attribute) => {
				output[attribute] = {
					type: columnsData[attribute].type,
					typeTerm: columnsData[attribute].typeTerm,
					subtype: columnsData[attribute].subtype,
					extra: columnsData[attribute].extra,
					primaryKey: columnsData[attribute].isPrimaryKey,
					autoIncrement: columnsData[attribute].isAutoIncrement,
					nullable: columnsData[attribute].isNullable,
					float: columnsData[attribute].isFloat,
					unsigned: columnsData[attribute].isUnsigned,
					foreignKey: columnsData[attribute].isForeignKey,
					unique: columnsData[attribute].isUnique,
					optionsList: columnsData[attribute].optionsList,
					maxTextLength: columnsData[attribute].maxTextLength,
				}
				return output;
			}, {}),
			relations: tableData.foreignKeys,
		}
	});
}, {});


%>// First, imports:
const axios = (typeof axios !== "undefined") ? axios : require("axios");

// Then, module:
(function(e, n) {
	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = n;
	} else if (typeof define === "function" && typeof define.amd !== "undefined") {
		define([], () => n);
	} else {
		window[e] = n;
	}
})("ClientAPI", (function(entities, baseURL) {

	const ClientSideAPI = function(options = {}) {
		// Prepare helpers:
		const runSchema = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.get(endpoint, ...others);
		};
		const runGetMany = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.get(endpoint, ...others);
		};
		const runGetOne = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.get(endpoint, ...others);
		};
		const runPostMany = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.post(endpoint, ...others);
		};
		const runPostOne = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.post(endpoint, ...others);
		};
		const runPutMany = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.put(endpoint, ...others);
		};
		const runPutOne = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.put(endpoint, ...others);
		};
		const runDeleteMany = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.delete(endpoint, ...others);
		};
		const runDeleteOne = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.delete(endpoint, ...others);
		};
		const runGetFile = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.get(endpoint, ...others);
		};
		const runSetFile = (entity, ...others) => {
			const endpoint = this.formatRestEndpoint(entity.endpoint);
			return this.axios.post(endpoint, ...others);
		};
		// Prepare properties:
		this.baseURL = baseURL || "";
		this.formatRestEndpoint = (endpoint) => {
			return this.baseURL.replace(/\/+$/g, "") + (endpoint ? ("/" + endpoint.replace(/^\/+/g, "")) : "");
		};
		this.api = {};
		this.registerEntity = (entity) => {
			this.api[entity.camel] = {
				schema: () => runSchema(entity),
				getMany: () => runGetMany(entity),
				getOne: () => runGetOne(entity),
				postMany: () => runPostMany(entity),
				postOne: () => runPostOne(entity),
				putMany: () => runPutMany(entity),
				putOne: () => runPutOne(entity),
				deleteMany: () => runDeleteMany(entity),
				deleteOne: () => runDeleteOne(entity),
				getFile: () => runGetFile(entity),
				setFile: () => runSetFile(entity),
			}
		};
		this.timeout = {};
		this.headers = {};
		this.options = {
			timeout: 3000,
			headers: {}
		};
		// Provide options:
		Object.assign(this, options);
		// Register entities:
		Object.keys(entities).forEach(name => {
			const entity = entities[name];
			this.registerEntity(entity);
		});
		// Generate proxified client:
		this.axios = axios.create(this.options);
		// Return instance:
		return this;
	};

	return ClientSideAPI;
})(<%-JSON.stringify(entities, null, 2)%>, <%-JSON.stringify(baseURL + schema.general.slug)%>));