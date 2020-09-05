const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Specimen", {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING
		allowNull: false
	}
}, {

});