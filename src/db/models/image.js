const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Image", {
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