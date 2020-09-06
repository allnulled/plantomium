const {
	Sequelize,
	DataTypes
} = require("sequelize");

sequelize.define("<%-tableData.model%>", {
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