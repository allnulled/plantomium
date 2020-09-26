


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

})({
  "ChatMessages": {
    "table": "chat_messages",
    "endpoint": "/chat-messages",
    "camel": "chatMessages",
    "capital": "ChatMessages",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "message": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 500
      },
      "created_at": {
        "type": "date",
        "typeTerm": "datetime",
        "subtype": "datetime",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "chat_messages_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboCompoundAndPlant": {
    "table": "combo_compound_and_plant",
    "endpoint": "/combo-compound-and-plant",
    "camel": "comboCompoundAndPlant",
    "capital": "ComboCompoundAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_compound": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "percentage": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_compound_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_compound_and_plant_ibfk_1",
        "column": "id_compound",
        "referencedTable": "compound",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboEnvironmentAndPlant": {
    "table": "combo_environment_and_plant",
    "endpoint": "/combo-environment-and-plant",
    "camel": "comboEnvironmentAndPlant",
    "capital": "ComboEnvironmentAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_environment": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_environment_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_environment_and_plant_ibfk_1",
        "column": "id_environment",
        "referencedTable": "environment",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboGroupAndPermission": {
    "table": "combo_group_and_permission",
    "endpoint": "/combo-group-and-permission",
    "camel": "comboGroupAndPermission",
    "capital": "ComboGroupAndPermission",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_group": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_permission": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "combo_group_and_permission_ibfk_1",
        "column": "id_group",
        "referencedTable": "groups",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_group_and_permission_ibfk_2",
        "column": "id_permission",
        "referencedTable": "permissions",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboImageAndPlant": {
    "table": "combo_image_and_plant",
    "endpoint": "/combo-image-and-plant",
    "camel": "comboImageAndPlant",
    "capital": "ComboImageAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_image": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_image_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_image_and_plant_ibfk_1",
        "column": "id_image",
        "referencedTable": "image",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboImageAndSpecimen": {
    "table": "combo_image_and_specimen",
    "endpoint": "/combo-image-and-specimen",
    "camel": "comboImageAndSpecimen",
    "capital": "ComboImageAndSpecimen",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_specimen": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_image": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_image_and_specimen_ibfk_2",
        "column": "id_specimen",
        "referencedTable": "specimen",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_image_and_specimen_ibfk_1",
        "column": "id_image",
        "referencedTable": "image",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboLocalizationAndPlant": {
    "table": "combo_localization_and_plant",
    "endpoint": "/combo-localization-and-plant",
    "camel": "comboLocalizationAndPlant",
    "capital": "ComboLocalizationAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_localization": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_localization_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_localization_and_plant_ibfk_1",
        "column": "id_localization",
        "referencedTable": "localization",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboTraitAndPlant": {
    "table": "combo_trait_and_plant",
    "endpoint": "/combo-trait-and-plant",
    "camel": "comboTraitAndPlant",
    "capital": "ComboTraitAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_trait": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_trait_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_trait_and_plant_ibfk_1",
        "column": "id_trait",
        "referencedTable": "trait",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboTraitAndSpecimen": {
    "table": "combo_trait_and_specimen",
    "endpoint": "/combo-trait-and-specimen",
    "camel": "comboTraitAndSpecimen",
    "capital": "ComboTraitAndSpecimen",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_specimen": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_trait": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_trait_and_specimen_ibfk_2",
        "column": "id_specimen",
        "referencedTable": "specimen",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_trait_and_specimen_ibfk_1",
        "column": "id_trait",
        "referencedTable": "trait",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboUsageAndPlant": {
    "table": "combo_usage_and_plant",
    "endpoint": "/combo-usage-and-plant",
    "camel": "comboUsageAndPlant",
    "capital": "ComboUsageAndPlant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_usage": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "combo_usage_and_plant_ibfk_2",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_usage_and_plant_ibfk_1",
        "column": "id_usage",
        "referencedTable": "usages",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboUserAndGroup": {
    "table": "combo_user_and_group",
    "endpoint": "/combo-user-and-group",
    "camel": "comboUserAndGroup",
    "capital": "ComboUserAndGroup",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_group": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "combo_user_and_group_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_user_and_group_ibfk_2",
        "column": "id_group",
        "referencedTable": "groups",
        "referencedColumn": "id"
      }
    ]
  },
  "ComboUserAndPermission": {
    "table": "combo_user_and_permission",
    "endpoint": "/combo-user-and-permission",
    "camel": "comboUserAndPermission",
    "capital": "ComboUserAndPermission",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_permission": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "combo_user_and_permission_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      },
      {
        "constraint": "combo_user_and_permission_ibfk_2",
        "column": "id_permission",
        "referencedTable": "permissions",
        "referencedColumn": "id"
      }
    ]
  },
  "Compound": {
    "table": "compound",
    "endpoint": "/compound",
    "camel": "compound",
    "capital": "Compound",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "referencia": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 500
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "Configuration": {
    "table": "configuration",
    "endpoint": "/configuration",
    "camel": "configuration",
    "capital": "Configuration",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "aspect": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 600
      },
      "value": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "configuration_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "Environment": {
    "table": "environment",
    "endpoint": "/environment",
    "camel": "environment",
    "capital": "Environment",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 300
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "ExampleProcess": {
    "table": "example_process",
    "endpoint": "/example-process",
    "camel": "exampleProcess",
    "capital": "ExampleProcess",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_creator": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "data": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "meta": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "transactions": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "status": {
        "type": "list",
        "typeTerm": "enum",
        "subtype": "enum",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": [
          "started",
          "continued",
          "outdated"
        ],
        "maxTextLength": 9
      },
      "created_at": {
        "type": "date",
        "typeTerm": "datetime",
        "subtype": "datetime",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "example_process_ibfk_1",
        "column": "id_creator",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "ExampleProcessTransaction": {
    "table": "example_process_transaction",
    "endpoint": "/example-process-transaction",
    "camel": "exampleProcessTransaction",
    "capital": "ExampleProcessTransaction",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_process": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_transactor": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "operation": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 60
      },
      "description": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 200
      },
      "created_at": {
        "type": "date",
        "typeTerm": "datetime",
        "subtype": "datetime",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": [
      {
        "constraint": "example_process_transaction_ibfk_1",
        "column": "id_process",
        "referencedTable": "example_process",
        "referencedColumn": "id"
      },
      {
        "constraint": "example_process_transaction_ibfk_2",
        "column": "id_transactor",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "Filesystem": {
    "table": "filesystem",
    "endpoint": "/filesystem",
    "camel": "filesystem",
    "capital": "Filesystem",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "nodetype": {
        "type": "list",
        "typeTerm": "enum",
        "subtype": "enum",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": [
          "branch",
          "leaf"
        ],
        "maxTextLength": 6
      },
      "path": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "contents": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "Groups": {
    "table": "groups",
    "endpoint": "/groups",
    "camel": "groups",
    "capital": "Groups",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "description": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 500
      }
    },
    "relations": []
  },
  "HistoryData": {
    "table": "history_data",
    "endpoint": "/history-data",
    "camel": "historyData",
    "capital": "HistoryData",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "user_ip": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 40
      },
      "user_agent": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 120
      },
      "user_id": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 20
      },
      "original_table": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 120
      },
      "request_data": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "data": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "metadata": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "description": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 200
      },
      "deleted_at": {
        "type": "date",
        "typeTerm": "datetime",
        "subtype": "datetime",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": []
  },
  "HistoryEvent": {
    "table": "history_event",
    "endpoint": "/history-event",
    "camel": "historyEvent",
    "capital": "HistoryEvent",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "user_ip": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 40
      },
      "user_agent": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 120
      },
      "user_id": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 20
      },
      "original_table": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 120
      },
      "event": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 120
      },
      "data": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "metadata": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "description": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 200
      },
      "deleted_at": {
        "type": "date",
        "typeTerm": "datetime",
        "subtype": "datetime",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": []
  },
  "Image": {
    "table": "image",
    "endpoint": "/image",
    "camel": "image",
    "capital": "Image",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_specimen": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "image_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "Localization": {
    "table": "localization",
    "endpoint": "/localization",
    "camel": "localization",
    "capital": "Localization",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 300
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "Permissions": {
    "table": "permissions",
    "endpoint": "/permissions",
    "camel": "permissions",
    "capital": "Permissions",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "description": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 500
      }
    },
    "relations": []
  },
  "Plant": {
    "table": "plant",
    "endpoint": "/plant",
    "camel": "plant",
    "capital": "Plant",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 200
      },
      "name_scientific": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "name_popular": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      },
      "field_1": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "field_2": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "field_3": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "field_4": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "field_5": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      }
    },
    "relations": []
  },
  "PlantDetails": {
    "table": "plant_details",
    "endpoint": "/plant-details",
    "camel": "plantDetails",
    "capital": "PlantDetails",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "plant_details_ibfk_1",
        "column": "id_plant",
        "referencedTable": "plant",
        "referencedColumn": "id"
      }
    ]
  },
  "Sessions": {
    "table": "sessions",
    "endpoint": "/sessions",
    "camel": "sessions",
    "capital": "Sessions",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "session_token": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "refresh_token": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      }
    },
    "relations": [
      {
        "constraint": "sessions_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "Specimen": {
    "table": "specimen",
    "endpoint": "/specimen",
    "camel": "specimen",
    "capital": "Specimen",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_plant": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_user": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": true,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": [
      {
        "constraint": "specimen_ibfk_1",
        "column": "id_user",
        "referencedTable": "users",
        "referencedColumn": "id"
      }
    ]
  },
  "Trait": {
    "table": "trait",
    "endpoint": "/trait",
    "camel": "trait",
    "capital": "Trait",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 1000
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "TraitDetails": {
    "table": "trait_details",
    "endpoint": "/trait-details",
    "camel": "traitDetails",
    "capital": "TraitDetails",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_trait": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "details": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "TraitSecretDetails": {
    "table": "trait_secret_details",
    "endpoint": "/trait-secret-details",
    "camel": "traitSecretDetails",
    "capital": "TraitSecretDetails",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "id_trait": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": null
      },
      "details": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "Usages": {
    "table": "usages",
    "endpoint": "/usages",
    "camel": "usages",
    "capital": "Usages",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 300
      },
      "description": {
        "type": "text",
        "typeTerm": "text",
        "subtype": "text",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 65535
      }
    },
    "relations": []
  },
  "Users": {
    "table": "users",
    "endpoint": "/users",
    "camel": "users",
    "capital": "Users",
    "attributes": {
      "id": {
        "type": "number",
        "typeTerm": "int",
        "subtype": "int",
        "extra": "auto_increment",
        "primaryKey": true,
        "autoIncrement": true,
        "nullable": false,
        "float": true,
        "unsigned": false,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": null
      },
      "name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": true,
        "optionsList": null,
        "maxTextLength": 200
      },
      "full_name": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 400
      },
      "profile_picture": {
        "type": "text",
        "typeTerm": "varchar",
        "subtype": "varchar",
        "extra": false,
        "primaryKey": false,
        "autoIncrement": null,
        "nullable": false,
        "float": null,
        "unsigned": null,
        "foreignKey": false,
        "unique": false,
        "optionsList": null,
        "maxTextLength": 400
      }
    },
    "relations": []
  }
}, "https://127.0.0.1:8888/api/v1", "https://127.0.0.1:8888/auth/v1"));