const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

class BaseAgent {

	static create(...args) {
		return new this(...args);
	}

	static get SETTINGS() {
		throw new Error("Static property SETTINGS should be overriden");
	}

	constructor(options = {}) {
		cms.utils.trace("cms.email.agents.base.agent.constructor");
		Object.assign(this, options);
		this.settings = Object.assign({}, this.constructor.SETTINGS, options.settings || {});
	}

	onPrepare() {
		throw new Error("Method onPrepare should be overriden");
	}

	onSend() {
		throw new Error("Method onSend should be overriden");
	}

	onSent() {
		throw new Error("Method onSent should be overriden");
	}

	onErrors(error) {
		cms.utils.debugError(error);
	}

	async send(parameters = {}) {
		cms.utils.trace("cms.email.agents.base.agent.send");
		try {
			await this.onPrepare(parameters);
			await this.onSend(parameters);
			await this.onSent(parameters);
			return parameters.output;
		} catch(error) {
			throw error;
		}
	}

}

module.exports = BaseAgent;