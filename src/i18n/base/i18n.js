const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const fs = require("fs");
const path = require("path");

class I18nGetter {

	static create(...args) {
		return new this(...args);
	}

	constructor(configurations = {}, i18n = undefined, language = undefined, namespace = undefined, options = {}) {
		Object.assign(this, options);
		this.i18n = i18n;
		this.configuration = configurations;
		this.selectedLanguage = language;
		this.selectedNamespace = namespace;
	}

	setLanguage(langKey) {
		this.selectedLanguage = langKey;
	}

	setNamespace(nsKey) {
		this.selectedNamespace = nsKey;
	}

	createFunction() {
		return this.getKey.bind(this);
	}

	setGlobally() {
		window._ = this.createFunction();
	}

	getKey(key, parameters = {}, contextOverrider = {}) {
		const lang = contextOverrider.lang || this.selectedLanguage;
		const nspc = contextOverrider.ns || this.selectedNamespace;
		if (!(lang in this.i18n.translationTemplates)) {
			return this.onGetKeyFallback(key, parameters, contextOverrider, lang, nscp, this, "Language failed");
		}
		if (!(nspc in this.i18n.translationTemplates[lang])) {
			return this.onGetKeyFallback(key, parameters, contextOverrider, lang, nscp, this, "Namespace failed");
		}
		if (!(key in this.i18n.translationTemplates[lang][nscp])) {
			return this.onGetKeyFallback(key, parameters, contextOverrider, lang, nscp, this, "Key failed");
		}
		const contents = this.i18n.translationTemplates[lang][nspc][key];
		const args = Object.assign({
			i18nGetter: this,
			i18n: this.i18n,
			_: this.createFunction()
		}, parameters);
		return ejs.render(contents, args, this.configurations.renderOptions);
	}

	onGetKeyFallback(key, parameters, contextOverrider, lang, nscp, i18nGetter, errorMessage) {
		return key;
	}

}

class I18n {

	static create(...args) {
		return new this(...args);
	}

	static get DEFAULT_GETTER_CONFIGURATIONS() {
		return {
			renderOptions: {
				delimiter: "#"
			}
		}
	}

	static get Getter() {
		return I18nGetter;
	}

	constructor(options = {}) {
		Object.assign(this, options);
		if ((!Array.isArray(this.directories)) || (this.directories.length === 0)) {
			throw new Error("Required <directories> to be an array of at least 1 item on <i18n.constructor> [ERR:2773]");
		}
		this.loadTranslationTemplates();
		this.getter = this.createGetter();
	}

	loadTranslationTemplates() {
		const output = {};
		for (let indexDir = 0; indexDir < this.directories.length; indexDir++) {
			const dir = path.resolve(this.directories[indexDir]).replace(/\/\{language\}\/\{namespace\}\/\{id\}$/g, "");
			Object.assign(output, cms.utils.requireTranslationsDirectory(dir, this.translationTemplates));
		}
		return output;
	}

	createGetter(configurations = {}) {
		const getterConfig = Object.assign({}, this.constructor.DEFAULT_GETTER_CONFIGURATIONS, configurations);
		return I18nGetter.create(getterConfig, this);
	}

}

module.exports = I18n;