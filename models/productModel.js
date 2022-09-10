const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceDiscount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        default: 0,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true,
    }
  );
  return Product;
};
