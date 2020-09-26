const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("TraitSecretDetails", {
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