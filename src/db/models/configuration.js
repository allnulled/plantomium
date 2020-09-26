const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Configuration", {
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