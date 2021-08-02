'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Cart.belongsTo(models.User, {
				foreignKey: 'userId',
				onDelete: 'CASCADE',
			});
		}
	}
	Cart.init(
		{
			category: DataTypes.STRING,
			description: DataTypes.STRING,
			apiNum: DataTypes.INTEGER,
			image: DataTypes.STRING,
			price: DataTypes.INTEGER,
			title: DataTypes.STRING,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Cart',
		}
	);
	return Cart;
};
