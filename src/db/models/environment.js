const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Environment", {
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