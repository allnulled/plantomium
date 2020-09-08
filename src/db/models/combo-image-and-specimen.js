const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboImageAndSpecimen", {
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