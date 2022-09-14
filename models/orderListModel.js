const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const OrderList = sequelize.define(
    "OrderList",
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
      ordersList: {
        type: DataTypes.STRING,
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

  OrderList.associate = (models) => {
    OrderList.belongsTo(models.User, { foreignKey: { name: "userId", allowNull: false } });
    OrderList.hasOne(models.Payment, {
      foreignKey: { name: "orderListId", allowNull: false },
      sourceKey: "id",
    });
  };

  return OrderList;
};
