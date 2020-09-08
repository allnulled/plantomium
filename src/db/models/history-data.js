const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("HistoryData", {
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