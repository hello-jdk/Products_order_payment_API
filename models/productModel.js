const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        defaultValue: 0,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: { name: "userId", allowNull: false } });
    Product.hasMany(models.Order, {
      foreignKey: { name: "productId", allowNull: false },
      sourceKey: "id",
    });
  };

  return Product;
};
