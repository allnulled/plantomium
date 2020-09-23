const { expect } = require("chai");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");

describe("I18N Test", function() {
	this.timeout(1000 * 5);

	before(function() {
		//
	});

	after(function() {
		// 
	});

	it("can load hardcoded translations", function(done) {
		const _es = cms.i18n.createGetter({}, "es", "project.docs").createFunction();
		const _ca = cms.i18n.createGetter({}, "ca", "project.docs").createFunction();
		const _en = cms.i18n.createGetter({}, "en", "project.docs").createFunction();
		expect(_es("bienvenida", { female: true })).to.equal("Bienvenida a [`Plantomium CMS`](#)");
		expect(_ca("bienvenida", { female: true })).to.equal("Benvinguda a [`Plantomium CMS`](#)");
		expect(_en("bienvenida", { female: true })).to.equal("Welcome to [`Plantomium CMS`](#)");
		done();
	});

});