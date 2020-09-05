const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboTraitAndPlant", {
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