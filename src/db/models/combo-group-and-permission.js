const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboGroupAndPermission", {
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