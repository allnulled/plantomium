const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ChatroomParticipant", {
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