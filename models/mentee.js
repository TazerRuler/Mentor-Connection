module.exports = function(sequelize, DataTypes){
	
	var mentee = sequelize.define("mentor", {
		FName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		LName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		city:{
			type: DataTypes.STRING,
			allowNull: false	
			},
		state:{
			type: DataTypes.STRING,
			allowNull: false
		}
			
	});

	return mentee;
};
		