const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboUsageAndPlant", {
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