const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Trait", {
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