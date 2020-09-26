const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboEnvironmentAndPlant", {
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