const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboImageAndPlant", {
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