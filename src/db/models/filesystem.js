const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("Filesystem", {
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