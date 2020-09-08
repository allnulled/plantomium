const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Plant", {
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