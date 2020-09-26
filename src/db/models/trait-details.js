const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("TraitDetails", {
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