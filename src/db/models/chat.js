const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Chat", {
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