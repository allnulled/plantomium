const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Compound", {
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