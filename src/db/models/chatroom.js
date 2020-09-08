const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Chatroom", {
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