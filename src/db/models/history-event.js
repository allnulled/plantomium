const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("HistoryEvent", {
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