const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("PlantDetails", {
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