const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Users", {
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