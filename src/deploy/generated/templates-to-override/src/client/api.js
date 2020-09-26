<%

const schemaFilename = require("path").basename(process.env.SCHEMA_VIRTUAL_OUTPUT);
const schema = parameters.data[schemaFilename];
const tableNames = Object.keys(schema.columns);
const baseURL = process.env.APP_URL + ":" + process.env.APP_PORT;
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


%>


(function(e, n) {
	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = n;
	} else if (typeof define === "function" && typeof define.amd !== "undefined") {
		define([], () => n);
	} else {
		window[e] = n;
	}
})("ClientAPI", (function(entities, baseURL, authURL) {

	const axios = ((typeof(window) === "object") && (typeof(windows.axios) !== "undefined")) ? (axios) : require("axios");

	const decorateValues = function(original, decorator, fieldsParams = []) {
		const fields = [].concat(fieldsParams);
		for(let index=0; index < fields.length; index++) {
			const field = fields[index];
			if(field in decorator) {
				original[field] = decorator[field];
			}
		}
	}
	const decorateStringified = function(original, decorator, field) {
		if(field in decorator) {
			if(typeof decorator[field] === "object") {
				original[field] = JSON.stringify(decorator[field]);
			} else if(typeof decorator[field] === "string") {
				original[field] = decorator[field];
			}
		}
	}
	const toQuerystring = function(data) {
		let str = "";
		for (const key in data) {
			if (str != "") {
				str += "&";
			}
			str += key + "=" + encodeURIComponent(data[key]);
		}
		return str;
	}
	const runLogin = async (client, credentials = {}, ...others) => {
		try {
			if (typeof credentials.name !== "string") {
				throw new Error("Required <name> to be a string on <login> [ERR:A-845]");
			}
			if (typeof credentials.password !== "string") {
				throw new Error("Required <password> to be a string on <login> [ERR:A-845]");
			}
			const loginURL = client.formatAuthEndpoint("/login");
			const loginResponse = await client.axios.post(loginURL, {
				name: credentials.name,
				password: credentials.password
			}, ...others);
			if (loginResponse.data && loginResponse.data.data) {
				client.setSessionToken(loginResponse.data.data.session_token);
				client.setRefreshToken(loginResponse.data.data.refresh_token);
				return loginResponse.data;
			} else if (loginResponse.data && loginResponse.data.error) {
				throw (loginResponse.data.error);
			} else {
				throw (loginResponse.data);
			}
		} catch (error) {
			throw error;
		}
	}
	const runLogout = (client, ...others) => {
		const logoutURL = client.formatAuthEndpoint("/logout");
		return client.axios.post(logoutURL, ...others);
	}
	const runRefresh = (client, ...others) => {
		const refreshURL = client.formatAuthEndpoint("/refresh");
		return client.axios.get(refreshURL, ...others);
	}
	const runSchema = (client, entity, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.get(endpoint, ...others);
	};
	const runGetMany = (client, entity, queryParams = {}, ...others) => {
		const endpointParam = client.formatEndpoint(entity.endpoint);
		let endpoint = endpointParam;
		if(endpointParam.indexOf("?") === -1) {
			const query = {};
			decorateStringified(query, queryParams, "where");
			decorateStringified(query, queryParams, "fields");
			decorateStringified(query, queryParams, "join");
			decorateValues(query, queryParams, ["search", "limit", "page"]);
			if(Object.keys(query).length) {
				endpoint += "?" + toQuerystring(query);
			}
		}
		return client.axios.get(endpoint, ...others);
	};
	const runGetOne = (client, entity, id, queryParams = {}, ...others) => {
		if(typeof id !== "number") {
			id = parseInt(id);
		}
		if(!Number.isInteger(id)) {
			throw new Error("Required <id> to be an integer on <api> [ERR:599]");
		}
		const endpointParam = client.formatEndpoint(entity.endpoint);
		let endpoint = endpointParam.replace(/\/$/g, "") + "/" + id;
		if(endpointParam.indexOf("?") === -1) {
			const query = {};
			decorateStringified(query, queryParams, "where");
			decorateStringified(query, queryParams, "fields");
			decorateStringified(query, queryParams, "join");
			decorateValues(query, queryParams, ["search", "limit", "page"]);
			if(Object.keys(query).length) {
				endpoint += "?" + toQuerystring(query);
			}
		}
		return client.axios.get(endpoint, ...others);
	};
	const runPostMany = (client, entity, data = [], overrider = {}, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.post(endpoint, Object.assign({data}, overrider), ...others);
	};
	const runPostOne = (client, entity, data = [], overrider = {}, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.post(endpoint, Object.assign({data}, overrider), ...others);
	};
	const runPutMany = (client, entity, whereValues = {}, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.put(endpoint, whereValues, ...others);
	};
	const runPutOne = (client, entity, id, values = {}, ...others) => {
		if(typeof id !== "number") {
			id = parseInt(id);
		}
		if(!Number.isInteger(id)) {
			throw new Error("Required <id> to be an integer on <api> [ERR:413]");
		}
		const endpointParam = client.formatEndpoint(entity.endpoint);
		const endpoint = endpointParam.replace(/\/$/g, "") + "/" + id;
		return client.axios.put(endpoint, values, ...others);
	};
	const runDeleteMany = (client, entity, data, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.delete(endpoint, {data}, ...others);
	};
	const runDeleteOne = (client, entity, id, data, ...others) => {
		if(typeof id !== "number") {
			id = parseInt(id);
		}
		if(!Number.isInteger(id)) {
			throw new Error("Required <id> to be an integer on <api> [ERR:599]");
		}
		const endpointParam = client.formatEndpoint(entity.endpoint);
		const endpoint = endpointParam.replace(/\/$/g, "") + "/" + id;
		return client.axios.delete(endpoint, ...others);
	};
	const runGetFile = (client, entity, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.get(endpoint, ...others);
	};
	const runSetFile = (client, entity, ...others) => {
		const endpoint = client.formatEndpoint(entity.endpoint);
		return client.axios.post(endpoint, ...others);
	};

	const ClientSideAPI = function(options = {}) {
		// Prepare properties:
		this.baseURL = baseURL || "";
		this.authURL = authURL || "";
		this.formatEndpoint = (endpoint) => {
			return this.baseURL.replace(/\/+$/g, "") + (endpoint ? ("/" + endpoint.replace(/^\/+/g, "")) : "");
		};
		this.formatAuthEndpoint = (endpoint) => {
			return this.authURL.replace(/\/+$/g, "") + (endpoint ? ("/" + endpoint.replace(/^\/+/g, "")) : "");
		}
		this.api = {};
		this.registerEntity = (entity) => {
			this.api[entity.camel] = {
				schema: (...args) => runSchema(this, entity, ...args),
				getMany: (...args) => runGetMany(this, entity, ...args),
				getOne: (...args) => runGetOne(this, entity, ...args),
				postMany: (...args) => runPostMany(this, entity, ...args),
				postOne: (...args) => runPostOne(this, entity, ...args),
				putMany: (...args) => runPutMany(this, entity, ...args),
				putOne: (...args) => runPutOne(this, entity, ...args),
				deleteMany: (...args) => runDeleteMany(this, entity, ...args),
				deleteOne: (...args) => runDeleteOne(this, entity, ...args),
				getFile: (...args) => runGetFile(this, entity, ...args),
				setFile: (...args) => runSetFile(this, entity, ...args),
			}
		};
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
		this.auth = {
			login: (...args) => runLogin(this, ...args),
			logout: (...args) => runLogout(this, ...args),
			refresh: (...args) => runRefresh(this, ...args),
		};
		this.setSessionToken = sessionToken => {
			this.sessionToken = "Bearer: " + sessionToken;
			this.axios.defaults.headers.authorization = this.sessionToken;
		};
		this.setRefreshToken = refreshToken => {
			this.refreshToken = "Bearer: " + refreshToken;
		};
		// Generate proxified client:
		this.axios = axios.create(this.options);
		// Return instance:
		return this;
	};

	return ClientSideAPI;

})(<%-JSON.stringify(entities, null, 2)%>, <%-JSON.stringify(baseURL + schema.general.slug)%>, <%-JSON.stringify(baseURL + schema.general.slugForAuth)%>));