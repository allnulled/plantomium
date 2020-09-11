'use strict';

const path = require("path");
const ejs = require("ejs");
const up = path.resolve(__dirname + "/scripts/administration.ejs.sql");
const down = path.resolve(__dirname + "/scripts/administration.undo.ejs.sql");
const asynchandler = require("@allnulled/asynchandler");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  	const upQuery = await new Promise((ok, fail) => ejs.renderFile(up, {require,process}, { async: true }, asynchandler(ok, fail)));
  	await queryInterface.sequelize.query(upQuery);
  },

  down: async (queryInterface, Sequelize) => {
  	const downQuery = await new Promise((ok, fail) => ejs.renderFile(down, {require,process}, { async: true }, asynchandler(ok, fail)));
  	await queryInterface.sequelize.query(downQuery);
  }
};
