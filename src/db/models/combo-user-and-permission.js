const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboUserAndPermission", {
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