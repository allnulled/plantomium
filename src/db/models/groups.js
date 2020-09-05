const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Groups", {
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