const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ChatMessages", {
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