const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Sessions", {
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