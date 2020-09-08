const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Localization", {
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