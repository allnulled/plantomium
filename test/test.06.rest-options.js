const {
	expect
} = require("chai");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const cms = require(__dirname + "/../src/cms.js");
const Utils = require(__dirname + "/utils.js");

describe("REST test: options", function() {

	this.timeout(10 * 1000);

	it("can LOAD", async function() {
		try {
			await cms.initialized;
		} catch (error) {
			throw error;
		}
	});

	it("can understand WHERE and WHERE_POLICY options", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand JOIN and JOIN_POLICY options", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand LIMIT and LIMIT_POLICY options", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand OFFSET and OFFSET_POLICY options", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand SORT and SORT_POLICY options", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand RECURSIVE_SELECT option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});

	it("can understand CASCADE option", async function() {
		try {
			// @TODO:
		} catch(error) {
			throw error;
		}
	});


	

});