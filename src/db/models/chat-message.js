const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ChatMessage", {
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