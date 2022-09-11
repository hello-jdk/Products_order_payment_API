const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci", timestamps: true, paranoid: true }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: { name: "userId", allowNull: false } });
    Order.belongsTo(models.Product, { foreignKey: { name: "productId", allowNull: false } });
  };

  return Order;
};
