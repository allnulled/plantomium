const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboUserAndGroup", {
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