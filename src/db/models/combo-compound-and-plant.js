const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ComboCompoundAndPlant", {
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