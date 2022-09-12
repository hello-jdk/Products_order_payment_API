const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const Payment = sequelize.define(
    "Payment",
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
      orderListId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci", timestamps: true }
  );

  Payment.associate = (models) => {
    Payment.belongsTo(models.User, { foreignKey: { name: "userId", allowNull: false } });
  };

  return Payment;
};
