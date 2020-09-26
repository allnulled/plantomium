const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ChatroomMessage", {
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