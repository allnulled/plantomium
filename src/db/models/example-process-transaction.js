const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("ExampleProcessTransaction", {
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