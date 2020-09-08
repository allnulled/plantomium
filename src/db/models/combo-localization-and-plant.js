const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboLocalizationAndPlant", {
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