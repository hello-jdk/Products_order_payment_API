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
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci", timestamps: true }
  );

  return Payment;
};
