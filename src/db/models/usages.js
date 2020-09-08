const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Usages", {
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