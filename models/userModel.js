const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      grade: {
        type: DataTypes.INTEGER,
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

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: { name: "userId", allowNull: false },
      sourceKey: "id",
    });
    User.hasMany(models.OrderList, {
      foreignKey: { name: "userId", allowNull: false },
      sourceKey: "id",
    });
  };

  return User;
};
