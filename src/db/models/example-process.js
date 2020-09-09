const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ExampleProcess", {
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