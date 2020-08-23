class BaseMiddleware {
	
	static get Table() {
		throw new Error("This method should be overriden.");
	}
	
	static get Actor() {
		throw new Error("This method should be overriden.");
	}

	static create(...args) {
		return new this(...args);
	}

	constructor() {

	}

	mountToRouter(app) {

	}

}

module.exports = BaseMiddleware