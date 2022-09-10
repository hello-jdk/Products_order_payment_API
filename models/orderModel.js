const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Order = sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        default: 1,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci", timestamps: true }
  );
  return Order;
};
