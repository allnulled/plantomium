const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Permissions", {
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